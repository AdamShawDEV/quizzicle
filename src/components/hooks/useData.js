import { useEffect, useState } from "react";

const quizData = [
    {
        title: 'The Amazing Dinosaur Quiz',
        description: 'Test you knowledge with this fun quiz.',
        id: 'f98dhh08g0h',
        theme: {
            badgeBgColor: 'bg-amber-800',
            badgeHoverColor: 'hover:bg-amber-900',
        },
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
    },
    {
        title: 'Where in the World?',
        description: 'Do you know where animals live.',
        id: '87d9f7df897fd',
        theme: {
            badgeBgColor: 'bg-teal-800',
            badgeHoverColor: 'hover:bg-teal-900',
        },
        questions: [
            {
                question: 'Where do lions live?',
                correctAnswer: 'f8d09g8g',
                points: 5,
                answers: [
                    {
                        id: 'f8d09g8g',
                        answer: 'Africs',
                    },
                    {
                        id: '0g9d9g09dg',
                        answer: 'Asia',
                    },
                    {
                        id: 'sf09f9scf9',
                        answer: 'North America',
                    },
                    {
                        id: 'dfcf90dv90',
                        answer: 'Europe',
                    },
                ]
            },
            {
                question: 'Where will you find kangaroos?',
                correctAnswer: '0g9dfjxs8x',
                points: 10,
                answers: [
                    {
                        id: 'sf09csf9c',
                        answer: 'Antarctica',
                    },
                    {
                        id: 'ds8f08sdf8',
                        answer: 'New Zealand',
                    },
                    {
                        id: '0g9dfjxs8x',
                        answer: 'Australia',
                    },
                    {
                        id: '9x0s90dx9',
                        answer: 'Brazil',
                    },
                ]
            },
            {
                question: 'Where do penguins call hame?',
                correctAnswer: 'df8sxd0sf8',
                points: 15,
                answers: [
                    {
                        id: 'sdxs09x0x',
                        answer: 'Arctic',
                    },
                    {
                        id: 'd0c9s08c0a',
                        answer: 'Greenland',
                    },
                    {
                        id: 'sa8d9sd',
                        answer: 'Europe',
                    },
                    {
                        id: 'df8sxd0sf8',
                        answer: 'Southern Hemisphere',
                    },
                ]
            },
            {
                question: 'Where will you find ?',
                correctAnswer: 'df5s345df',
                points: 20,
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
    },
    {
        title: 'All About Animals',
        description: 'How well do you know animals?',
        id: 'kjdds7987s9797',
        theme: {
            badgeBgColor: 'bg-green-800',
            badgeHoverColor: 'hover:bg-green-900',
        },
        questions: [
            {
                question: 'What is the worlds biggest animal?',
                correctAnswer: 'cvv8xc8v0x',
                points: 5,
                answers: [
                    {
                        id: 'cvv8xc8v0x',
                        answer: 'Antarctic blue whale',
                    },
                    {
                        id: 'df9s0fsdf',
                        answer: 'Elephant',
                    },
                    {
                        id: 's9adas80a8d',
                        answer: 'Giant Squid',
                    },
                    {
                        id: '08sdf0s8df908d',
                        answer: 'Giraffe',
                    },
                ]
            },
            {
                question: 'Which animal is nocturnal?',
                correctAnswer: '0asdas09d',
                points: 10,
                answers: [
                    {
                        id: 'sd0f9sdf',
                        answer: 'Rabbit',
                    },
                    {
                        id: 'df809s8f',
                        answer: 'Zebra',
                    },
                    {
                        id: '0asdas09d',
                        answer: 'Python',
                    },
                    {
                        id: '08sdf0s8da8s',
                        answer: 'Deer',
                    },
                ]
            },
            {
                question: 'What is animal is called man\'s best friend?',
                correctAnswer: 'sa98afa0',
                points: 15,
                answers: [
                    {
                        id: 'ds98f09',
                        answer: 'Cows',
                    },
                    {
                        id: '98cd8d3',
                        answer: 'Tigers',
                    },
                    {
                        id: 'sa98afa0',
                        answer: 'Dogs',
                    },
                    {
                        id: 'a8ds7as8f',
                        answer: 'Pigs',
                    },
                ]
            },
            {
                question: 'What bird can\'t fly?',
                correctAnswer: 'd89fa0s8f0',
                points: 20,
                answers: [
                    {
                        id: 'd89fa0s8f0',
                        answer: 'Penguin',
                    },
                    {
                        id: 'a0f98dfs',
                        answer: 'Crow',
                    },
                    {
                        id: 'ds9f80d',
                        answer: 'Pigeon',
                    },
                    {
                        id: 'as8f07sdf9',
                        answer: 'Goose',
                    },
                ]
            },
        ]
    },
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