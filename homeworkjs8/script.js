
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
    constructor(university, course, fullName, rating) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.rating = rating;
    }

    getInfo() {
        console.log(`Студент ${this.course}-го курсу ${this.university} ${this.fullName}`)
    }

    getAverageMark() {
        let count = 0;
        let sum = 0;
        for (let i = 0; i < this.rating.length; i++) {
            sum += this.rating[i];
            count++;
        }
        return console.log(sum / count);
    }



    get marks() {
        return console.log(this.rating);

    }

    set marks(value) {
        this.rating.push(value)
        return console.log(this.rating);
    }
}

let Ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);
Ostap.getInfo();
Ostap.marks;
Ostap.marks = 5;
Ostap.getAverageMark();

/*
3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4,
4, 5]
4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку
студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
this.marks -> [5, 4, 4, 5, 5]
5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього
методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких
помилок, просто повертається завжди null замість масиву оцінок)
7. Створіть метод this.recover, який дозволить поновити студента
*/