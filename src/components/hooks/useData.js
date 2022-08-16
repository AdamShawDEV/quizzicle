import { useEffect, useState } from "react";

const quizData = [
    {
        title: 'The Amazing Dinosaur Quiz',
        description: 'Test you dino knowledge with this fun quiz.',
        id: 'kjdd8f9ds8f',
        questions: [
            {
                question: 'What is the tallest dinosaur?',
                correctAnswer: '9d8sf0s8f0d8f',
                points: 32,
                answers: [
                    {
                        id: '9d8sf0s8f0d8f',
                        answer: 'Brachiosaurus',
                    },
                    {
                        id: '808d80sf80sf',
                        answer: 'Triceratops',
                    },
                    {
                        id: 'dsf9-s8f08df',
                        answer: 'Spinosaurus',
                    },
                    {
                        id: '08sdf0s8df908d',
                        answer: 'Mosasaurus',
                    },
                ]
            },
            {
                question: 'What is fastest dinosaur?',
                correctAnswer: 'ds8f08sdf8',
                points: 32,
                answers: [
                    {
                        id: 'sasad90a8sd',
                        answer: 'Velociraptor',
                    },
                    {
                        id: 'ds8f08sdf8',
                        answer: 'Struthiomimus',
                    },
                    {
                        id: 'sdf09s-0df9',
                        answer: 'Giganotosaurus',
                    },
                    {
                        id: '08sdf0s8da8s',
                        answer: 'Stegosaurus',
                    },
                ]
            },
            {
                question: 'What are dinosaur remains called?',
                correctAnswer: '9f8s08dfs3',
                points: 32,
                answers: [
                    {
                        id: 'd533fsf35df35',
                        answer: 'Bones',
                    },
                    {
                        id: 's98f08sdfs8',
                        answer: 'Rocks',
                    },
                    {
                        id: '9f8s08dfs3',
                        answer: 'Fossils',
                    },
                    {
                        id: '08sdf0s8da8s09d8as8df908d',
                        answer: 'Mounds',
                    },
                ]
            },
            {
                question: 'What animal is related to dinosaurs?',
                correctAnswer: 'df5s345df',
                points: 32,
                answers: [
                    {
                        id: '5sdf543s',
                        answer: 'Cows',
                    },
                    {
                        id: 'sd7f98ds7f65',
                        answer: 'Fish',
                    },
                    {
                        id: 'df5s345df',
                        answer: 'Birds',
                    },
                    {
                        id: 's8f9s87df98s',
                        answer: 'Insects',
                    },
                ]
            },
        ]
    }
];

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
            await delay(1000);
            try {
                let result = [];
                if (id) {
                    result = quizData.find((i) =>
                        i.id === id
                    );
                    setData(result);
                } else {
                    result = quizData;
                }
                setData(result);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
            } catch (e) {
                setError(e);
                setRequestStatus(REQUEST_STATUS.ERROR);
            }
        }

        getData();
    })

    return { data, requestStatus, error };
}

export { REQUEST_STATUS, useData };