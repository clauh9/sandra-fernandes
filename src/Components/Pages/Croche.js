import React, { useState } from 'react';
import ImageGrid from '../ImageGrid';
import UploadForm from '../UploadForm';
import Modal from '../Modal';

const Croche = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div>
            <UploadForm folder={"Croche/"} collectionFolder={"croche"} />
            <ImageGrid setSelectedImg={setSelectedImg} collectionFolder={"croche"} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Croche;
