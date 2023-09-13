
/*
У цьому завданні вам необхідно створити клас Student та розробляти методи
всередині цього класу
1. У стдентів повинні бути наступні властивості: university, course, fullName
вони передаються при створенні студента(в конструктор).
2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
курс, учбовий заклад та імені студента.
*/

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        console.log(`Студент ${this.course}-го курсу ${this.university} ${this.fullName}`)
    }
}

let Ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");
Ostap.getInfo();