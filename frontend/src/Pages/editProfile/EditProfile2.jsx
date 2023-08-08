// Importamos las dependencias y los hooks.
import React, { useState } from 'react';

// Importamos los estilos.
import './editProfile.css';

const EditProfile = ({
    authUser,
    authUpdateUser,
    authUpdateAvatar,
    loading,
    setEditProfileModal,
}) => {
    const [name, setName] = useState(authUser.name);
    const [email, setEmail] = useState(authUser.email);
    const [surname, setSurname] = useState(authUser.surname);
    const [gender, setGender] = useState(authUser.gender);
    const [interest, setInterest] = useState(authUser.interest);
    const [avatar, setAvatar] = useState(null);

    return (
        <main className="edit-profile">
            <form
                className="form-avatar"
                onSubmit={(e) => {
                    e.preventDefault();
                    authUpdateAvatar(avatar);
                    setEditProfileModal(false);
                }}
            >
                <p>
                    <strong>Avatar:</strong>
                    <input
                        className="edit-avatar"
                        type="file"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        required
                    />
                </p>

                <button className="button-edit" disabled={loading}>
                    UPDATE AVATAR
                </button>
            </form>
            <form
                className="form-info"
                onSubmit={(e) => {
                    e.preventDefault();
                    authUpdateUser({ name, surname, gender, email, interest });
                    setEditProfileModal(false);
                }}
            >
                <p>
                    <strong>Name:</strong>
                    <input
                        className="edit-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    <strong>Surname:</strong>
                    <input
                        className="edit-surname"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </p>
                <p>
                    <strong>Email:</strong>
                    <input
                        className="edit-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <strong>Gender:</strong>
                    <select
                        className="edit-gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </p>

                <p>
                    <strong>Interest:</strong>
                    <select
                        className="edit-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                    >
                        <option value="">--</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Bodybuilding">Bodybuilding</option>
                        <option value="Unknown">N/A</option>
                    </select>
                </p>

                <button className="button-edit" disabled={loading}>
                    SAVE
                </button>
            </form>
        </main>
    );
};

export default EditProfile;

/* 


<p>
        <strong>Avatar:</strong>
        <input
          type="file"
          class="filepho"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </p>
*/
