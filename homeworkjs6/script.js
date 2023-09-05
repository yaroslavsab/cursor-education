const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

/*
Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
science"] - яка повертає список предметів
1.
для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
замінити на пробіл
*/

function getSubjects(studentsNumber) {
    let list = [];
    for (let key in students[studentsNumber].subjects) {
        key = key.replace(/_/g, ' ');
        list.push(key.charAt(0).toUpperCase() + key.slice(1));
    }

    return list.join(', ')
}

console.log(getSubjects(0));

/*
2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
середню оцінку по усім предметам для переданого студента НЕ МАСИВА
СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
попередніх домашніх завданнях :)
*/

function getAverageMark(studentsNumber) {
    let sum = 0, average = 0, count = 0;
    const subjects2 = students[studentsNumber].subjects;
    for (let key in subjects2) {
        for (let i = 0; i < subjects2[key].length; i++) {
            sum += subjects2[key][i];
            count++;
        }
        average = sum / count;
    }
    return average.toFixed(2);
}
console.log(getAverageMark(0))

/*
Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
"Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка
*/