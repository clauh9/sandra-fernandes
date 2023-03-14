import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

const useStorage = (file, folder, collectionFolder) => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");
    const [error, setError] = useState(""); //img we get from storage (that gets uploaded)

    useEffect(() => {

        const storageRef = projectStorage.ref(`${folder}${file.name}`);
        const collectionRef = projectFirestore.collection(collectionFolder);
        const collectionRefImg = projectFirestore.collection("images");

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            await collectionRefImg.add({ url, createdAt });
            setUrl(url);
        });
    }, [file, folder, collectionFolder]);


    return { progress, url, error };
}

export default useStorage;
