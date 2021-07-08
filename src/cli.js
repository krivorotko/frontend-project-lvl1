const readlineSync = require('readline-sync');

const main = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
};

module.exports = main;