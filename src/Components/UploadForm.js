import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({ folder, collectionFolder }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const types = ['image/png', "image/jpeg", "image/jpg"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file: png, jpg or jpeg")
        }
    }

    return (
        <form>
            <input className='inputfile' name="file" id="file" type="file" onChange={changeHandler} accept="image/png, image/jpg, image/jpeg" />
            <label htmlFor="file">+</label>

            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} folder={folder} collectionFolder={collectionFolder} />}
            </div>
        </form>
    );
}

export default UploadForm;
