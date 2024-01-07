"use strict";
exports.__esModule = true;
exports.sample_users = exports.sample_tags = exports.sample_foods = void 0;
exports.sample_foods = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch']
    },
    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger']
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry']
    },
    {
        id: '5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup']
    },
    {
        id: '6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '7',
        name: 'Sushi Platter',
        price: 18,
        cookTime: '30-40',
        favorite: true,
        origins: ['japan'],
        stars: 4.8,
        imageUrl: 'assets/SushiPlatter.jpg',
        tags: ['Seafood', 'Japanese', 'Dinner']
    },
    {
        id: '8',
        name: 'Spaghetti Bolognese',
        price: 15,
        cookTime: '25-35',
        favorite: false,
        origins: ['italy'],
        stars: 4.2,
        imageUrl: 'assets/spaghetti-bolognese.jpg',
        tags: ['Italian', 'Pasta', 'Dinner']
    },
    {
        id: '9',
        name: 'Grilled Salmon',
        price: 22,
        cookTime: '15-25',
        favorite: true,
        origins: ['norway', 'scotland'],
        stars: 4.5,
        imageUrl: 'assets/Grilled-Salmon.jpg',
        tags: ['Seafood', 'Grill', 'Dinner']
    },
    {
        id: '10',
        name: 'Caesar Salad',
        price: 12,
        cookTime: '10-15',
        favorite: false,
        origins: ['mexico', 'us'],
        stars: 4.0,
        imageUrl: 'assets/caesar-salad.jpg',
        tags: ['Salad', 'Healthy', 'Lunch']
    },
];
exports.sample_tags = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
];
exports.sample_users = [
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '12345',
        address: 'Toronto On',
        isAdmin: true
    },
    {
        name: 'Jane Doe',
        email: 'Jane@gmail.com',
        password: '12345',
        address: 'Shanghai',
        isAdmin: false
    },
];
