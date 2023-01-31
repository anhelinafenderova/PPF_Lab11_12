const tasks = ['nauka programowania', 'nauka matematyki', 'nauka baz danych'];
const [task1, task2, task3] = tasks;

const courseData = {
  name: 'Projektowanie i programowanie front-end',
  shortcut: 'PPFront',
  year: '2',
  content: {
    types: {
      lectures: true,
      laboratories: true,
      projects: true,
    },
    hours: {
      lectures: 5,
      laboratories: 15,
      projects: 15,
    },
  },
};

const { lectures, laboratories, projects } = courseData.content.hours;
const lecturesHours = courseData.content.hours.lectures;

console.log(lecturesHours);
module.exports = { courseData };
