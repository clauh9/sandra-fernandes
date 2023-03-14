import React, { useState } from 'react';
import ImageGrid from '../ImageGrid';
import UploadForm from '../UploadForm';
import Modal from '../Modal';
import { useAuthContext } from '../AuthContext';

const Croche = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const { currentUser } = useAuthContext();
    let compareID = "";
    if (currentUser === null) {
        compareID = "1";
    } else {
        compareID = currentUser.uid;
    }
    return (
        <div>
            {compareID === process.env.REACT_APP_USER_ADMIN && <UploadForm folder={"Croche/"} collectionFolder={"croche"} />}
            <ImageGrid setSelectedImg={setSelectedImg} collectionFolder={"croche"} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Croche;
