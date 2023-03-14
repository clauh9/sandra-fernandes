import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");
    const [error, setError] = useState(""); //img we get from storage (that gets uploaded)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        });
    }, [file]);


    return { progress, url, error };
}

export default UseStorage;
