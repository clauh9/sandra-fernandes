import React, { useState } from 'react';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';

const Home = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div>
            <ImageGrid setSelectedImg={setSelectedImg} collectionFolder={"images"} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
}

export default Home;
