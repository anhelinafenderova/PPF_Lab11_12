const { courseData } = require('./03destructuring.js');
const languages = ['javascript', 'C++', 'Python', 'java'];
const dsl = ['SQL', 'HTML', 'CSS', 'noSQL'];

const allLanguages = [...languages, ...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const startYear = { startYear: 0 };
const endYear = { endYear: 0 };

const courseDataForYear = { ...courseData, startYear, endYear };
console.log(courseDataForYear);
