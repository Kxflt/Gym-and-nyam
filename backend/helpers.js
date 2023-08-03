'use strict';

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const { v4: uuid } = require('uuid');
const { UPLOADS_DIR, SMTP_PASS, SMTP_USER } = process.env;
const nodemailer = require('nodemailer');

/**
 * ####################
 * ## Generate Error ##
 * ####################
 */

const generateError = (msg, code) => {
    const err = new Error(msg);
    err.httpStatus = code;
    throw err;
};

/**
 * #####################
 * ## Validate Schema ##
 * #####################
 */

const validateSchema = async (schema, data) => {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        error.httpStatus = 400;
        throw error;
    }
};

/* ####################
 * ##   Save photo   ##
 * ####################
 */
const savePhoto = async (img, width) => {
    try {
        // Assuming the photos are stored in the "uploads" directory.
        const uploadsPath = path.join(
            __dirname,

            process.env.UPLOADS_DIR
        );

        try {
            // Check if the directory exists before attempting to save the photo.
            await fs.access(uploadsPath);
        } catch {
            // If the directory doesn't exist, create it.
            await fs.mkdir(uploadsPath);
        }

        // Convert the image data to a Sharp object to resize it.
        const sharpImg = sharp(img.data);

        // Resize the image. "width" would be the desired width in pixels.
        sharpImg.resize(width);

        // Generate a unique name for the image.
        const imgName = `${uuid()}.jpg`;

        // Generate the absolute path to the image.
        const imgPath = path.join(uploadsPath, imgName);

        // Save the image.
        await sharpImg.toFile(imgPath);

        // Return the name with which we saved the image.
        return imgName;
    } catch (err) {
        console.error('Error saving photo:', err);
        // Throw the HTTP error if there's an issue in the function flow.
        throw {
            httpStatus: 500,
            code: 'FILE_SAVE_FAILED',
            message: 'Error al guardar el archivo en disco',
        };
    }
};

/* #####################
 * ##  Delete photo   ##
 * #####################
 */
const deletePhoto = async (imgName) => {
    try {
        // Assuming the photos are stored in the "uploads" directory.
        const imgPath = path.join(
            __dirname,

            process.env.UPLOADS_DIR,
            imgName
        );

        // Check if the file exists before attempting to delete
        try {
            await fs.access(imgPath);
        } catch {
            return;
        }

        await fs.unlink(imgPath);
    } catch (err) {
        console.error('Error deleting previous photo:', err);

        throw {
            httpStatus: 500,
            code: 'FILE_DELETE_FAILED',
            message: 'Error al eliminar el archivo del disco',
        };
    }
};

module.exports = deletePhoto;

/**
 * ###############
 * ## Send Mail ##
 * ###############
 */

// Creamos un transporte para poder enviar emails con nodemailer.
const transport = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

const sendMail = async (email, subject, body) => {
    try {
        const mailOptions = {
            from: SMTP_USER,
            to: email,
            subject,
            text: body,
        };

        await transport.sendMail(mailOptions);
    } catch (err) {
        console.error(err);
        generateError('Error al enviar el email al usuario', 500);
    }
};

module.exports = {
    generateError,
    validateSchema,
    savePhoto,
    deletePhoto,
    sendMail,
};
