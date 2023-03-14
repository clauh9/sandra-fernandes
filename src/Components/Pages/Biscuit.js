import React, { useState } from 'react';
import ImageGrid from '../ImageGrid';
import UploadForm from '../UploadForm';
import Modal from '../Modal';


const Biscuit = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div>
            <UploadForm folder={"Biscuit/"} collectionFolder={"biscuit"} />
            <ImageGrid setSelectedImg={setSelectedImg} collectionFolder={"biscuit"} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Biscuit;
