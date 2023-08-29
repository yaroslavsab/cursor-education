const students = ["Олександр", "Ігор", "Олена", "Оля", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPairs(students) {
    const maleStudents = [];
    const femaleStudents = [];

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.endsWith('а') || student.endsWith('я')) {
            femaleStudents.push(student);
        } else {
            maleStudents.push(student);
        }
    }

    const pairs = [];
    const minPairsCount = Math.min(maleStudents.length, femaleStudents.length);
    for (let i = 0; i < minPairsCount; i++) {
        pairs.push([maleStudents[i], femaleStudents[i]]);
    }

    return pairs;
}

const pairs = getPairs(students);

console.log(pairs);



function getTasks(pair, themes) {
    let tasks = [];
    for (let i = 0; i < pair.length; i++) {
        tasks.push([pair[i].join(" і "), themes[i]]);
    }
    return tasks;
}
const tasks = getTasks(pairs, themes);
console.log(tasks);


function getStudentMarks(students, marks) {
    let studentMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentMarks.push([students[i], marks[i]]);
    }
    return studentMarks;
}

console.log(getStudentMarks(students, marks));

function getRaiting(tasks) {
    let min = 1;
    let max = 5;
    let raiting = tasks;
    for (let i = 0; i < tasks.length; i++) {
        let rand = Math.ceil(Math.random() * (max - min) + min);
        raiting[i].push(rand);
    }
    return raiting;
}

const raiting = getRaiting(tasks);
console.log(raiting);