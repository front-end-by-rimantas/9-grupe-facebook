"use strict";

const posts = [
    // {
    //     id: 1,
    //     author: {
    //         id: 65131,
    //         photo: 'person.jpg',
    //         name: 'Name Surname'
    //     },
    //     time: 1540030365658,
    //     content: {
    //         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    //         photos: ['car-racing.png'],
    //         background: 'red'
    //     },
    //     interactions: {
    //         liked_person_ids: [65131, 584651, 54568, 46161, 9685316],
    //         comment_ids: [15165, 8416, 5265]
    //     }
    // },
    {
        id: 2,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'John Doe'
        },
        time: 1565165719006,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
        }
    },
    {
        id: 3,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Taylor Swift'
        },
        time: 1565164710988,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem ipsa magni laudantium culpa fugiat optio aperiam corporis ipsum? Minus, optio sapiente dolore iste explicabo fugiat a maxime rerum. Accusamus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem ipsa magni laudantium culpa fugiat optio aperiam corporis ipsum? Minus, optio sapiente dolore iste explicabo fugiat a maxime rerum. Accusamus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem ipsa magni laudantium culpa fugiat optio aperiam corporis ipsum? Minus, optio sapiente dolore iste explicabo fugiat a maxime rerum. Accusamus?'
        },
        interactions: {
            liked_person_ids: [65131, 584651]
        }
    },
    {
        id: 4,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Taylor Swift'
        },
        time: 1565164710988,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem ipsa magni laudantium culpa fugiat optio aperiam corporis ipsum? Minus, optio sapiente dolore iste explicabo fugiat a maxime rerum.'
        },
        interactions: {
            liked_person_ids: [65131, 584651]
        }
    },
    {
        id: 5,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1565164704988,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            photos: ['car-racing.png']
        },
        interactions: {
            liked_person_ids: [65131],
            comment_ids: [15165]
        }
    },
    {
        id: 6,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1565160714988,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            photos: ['portfolio.png', 'sign-up.png']
        },
        interactions: {
            liked_person_ids: [65131, 584651, 54568, 46161, 9685316],
            comment_ids: [15165, 8416, 5265]
        }
    },
    {
        id: 7,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1540030365658,
        content: {
            photos: ['car-racing.png', 'portfolio.png', 'sign-up.png']
        },
        interactions: {
            liked_person_ids: [65131, 584651, 54568, 46161, 9685316],
            comment_ids: [15165, 8416, 5265]
        }
    },
    {
        id: 8,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1540030365658,
        content: {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            photos: ['car-racing.png', 'portfolio.png', 'sign-up.png', 'serlokas.png']
        },
        interactions: {
            comment_ids: [15165, 8416, 5265]
        }
    },
    {
        id: 9,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1540030365658,
        content: {
            text: 'Lorem, ipsum',
            photos: ['car-racing.png', 'portfolio.png', 'sign-up.png', 'serlokas.png', 'coming-soon.png', 'zalia-mergaite.png']
        },
        interactions: {
            comment_ids: [15165, 8416]
        }
    },
    {
        id: 10,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1540030365658,
        content: {
            text: 'Lorem, ipsum dolor sit amet'
        }
    },
    {
        id: 11,
        author: {
            id: 65131,
            photo: 'person.jpg',
            name: 'Name Surname'
        },
        time: 1540030365658,
        content: {
            text: 'Lorem, ipsum dolor sit amet',
            background: 'red'
        },
        interactions: {
            liked_person_ids: [65131],
            comment_ids: [15165, 8416]
        }
    }
];