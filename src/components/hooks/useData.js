import { useEffect, useState } from "react";
import { db } from '../../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

function useData(id = null) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    const delay = (delaySeconds) => new Promise((resolve) => {
        setTimeout(resolve, delaySeconds);
    });

    useEffect(() => {
        const getData = async () => {
            //await delay(1000);
            try {
                if (id) {
                    const q = query(collection(db, `question`), where('quizId', '==', id));
                    const querySnapshot = await getDocs(q);
                    setData(querySnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    }));
                } else {
                    const q = query(collection(db, 'quiz'));
                    const querySnapshot = await getDocs(q);
                    setData(querySnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    }));
                }
                setRequestStatus(REQUEST_STATUS.SUCCESS);
            } catch (e) {
                setError(e);
                setRequestStatus(REQUEST_STATUS.ERROR);
            }
        }

        getData();
    }, [])

    return { data, requestStatus, error };
}

export { REQUEST_STATUS, useData };