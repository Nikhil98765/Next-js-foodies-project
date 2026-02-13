'use client';

import { useRef, useState } from 'react';

import styles from './image-picker.module.css';
import Image from 'next/image';

export const ImagePicker = ({ name, label }) => {
  
  const inputRef = useRef();
  const [dataURL, setDataURL] = useState();
  
  function handleImagePick() {
    inputRef.current.click();
  }

  function handleChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setDataURL(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setDataURL(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  }


  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!dataURL && <p>No Image has been picked yet.</p>}
          {dataURL &&
            <Image src={dataURL} fill alt='User Picked Image'></Image>
          }
        </div>
        <input
          className={styles.input}
          ref={inputRef}
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg'
          onChange={handleChange}
          required
        />
        <button type='button' className={styles.button} onClick={handleImagePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}