import React, { useState } from 'react';
import ImageGrid from '../ImageGrid';
import UploadForm from '../UploadForm';
import Modal from '../Modal';
import { useAuthContext } from '../AuthContext';


const Biscuit = () => {
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
            {compareID === process.env.REACT_APP_USER_ADMIN && <UploadForm folder={"Biscuit/"} collectionFolder={"biscuit"} />}
            <ImageGrid setSelectedImg={setSelectedImg} collectionFolder={"biscuit"} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Biscuit;
