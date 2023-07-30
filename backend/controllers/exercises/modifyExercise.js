'use strict';
const { generateError, savePhoto, deletePhoto } = require('../../helpers');
const modifyExerciseQuery = require('../../db/queries/exercises/modifyExerciseQuery');
const infoExerciseQuery = require('../../db/queries/exercises/infoExerciseQuery');

const modifyExercise = async (req, res, next) => {
  try {
    // Destructuring of the body
    let { name, description, typologyId, muscleGroupId } = req.body;

    // If required fields are missing, generate an error. The user is not required to upload a photo, hence the use of the optional chaining (?.) after "req.files".
    if (
      !name &&
      !description &&
      !typologyId &&
      !muscleGroupId &&
      !req.files?.photo
    ) {
      generateError('Faltan campos', 400);
    }

    // Destructuring of the path params
    const { id: idExercise } = req.params;

    const infoExercise = await infoExerciseQuery(idExercise);

    // Destructuring of the relevant columns from the "exercises" table, with initial values from the database.
    const {
      name: nameDB,
      description: descriptionDB,
      photo: photoDB,
      typologyId: typologyDB,
      muscleGroupId: muscleGroupDB,
    } = infoExercise;

    // Check if the admin has changed any data. If not, use the existing data from the database.
    name = name || nameDB;
    description = description || descriptionDB;
    typologyId = typologyId || typologyDB;
    muscleGroupId = muscleGroupId || muscleGroupDB;

    // Variable that will store the new photo name if the admin decides to upload one.
    let imgNameExercise;

    // If the admin has uploaded a new photo...
    if (req.files?.photo) {
      // Log the value of photoDB for debugging purposes
      console.log('Previous photo:', photoDB);

      try {
        // ... delete the previous photo ...
        await deletePhoto(photoDB);
        console.log('Previous photo deleted successfully.');
      } catch (err) {
        console.error('Error deleting previous photo:', err);
        // Handle the error if necessary
      }

      try {
        // ... and save the new image ...
        imgNameExercise = await savePhoto(req.files.photo);
        console.log('New photo saved:', imgNameExercise);
      } catch (err) {
        console.error('Error saving new photo:', err);
        // Handle the error if necessary
      }
    }
    // If the admin didn't upload a new image, use the existing one from the database.
    imgNameExercise = imgNameExercise || photoDB;

    // Destructuring the exercise data for modification.
    const exerciseData = {
      name,
      description,
      typologyId,
      muscleGroupId,
      imgNameExercise,
      idExercise,
    };

    // Update the exercise data.
    await modifyExerciseQuery(exerciseData);

    // Send a message confirming the successful modification of the exercise data and assign a value to the "modifiedAt" column.
    res.send({
      status: 'ok',
      message: `Ejercicio ${idExercise} modificado correctamente`,
      data: {
        exercise: {
          name,
          description,
          typologyId,
          muscleGroupId,
          modifiedAt: new Date(),
          photo: imgNameExercise,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyExercise;
