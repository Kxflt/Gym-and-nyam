import React, { useState } from 'react';
import ImgDefaultAvatar from '../../assets/user.png';

const Avatar = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(ImgDefaultAvatar);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <div>
      <div className='avatar-container'>
        {imageUrl ? (
          <img className='avatar' src={imageUrl} alt='User Avatar' />
        ) : (
          <div className='avatar-placeholder' />
        )}
      </div>
      <input type='file' accept='image/*' onChange={handleImageChange} />
      
   
    </div>
  );
};

export default Avatar;
