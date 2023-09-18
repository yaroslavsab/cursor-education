
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
        this.isDismissed = false;
    }

    getInfo() {
        console.log(`Студент ${this.course}-го курсу ${this.university} ${this.fullName}`)
    }

    getAverageMark() {
        let sum = 0;
        if (this.isDismissed) {
            return null;
        }
        if (this.rating.length === 0) {
            return 0;
        }
        for (let i = 0; i < this.rating.length; i++) {
            sum += this.rating[i];
        }
        return console.log(sum / this.rating.length);
    }

    dismiss() {
        this.isDismissed = true;
        this.rating = null;
    }

    recover() {
        this.isDismissed = false;
        this.rating = [];
    }


    get marks() {
        return console.log(this.rating);

    }

    set marks(value) {
        if (!this.isDismissed) {
            this.rating.push(value);
        }
    }
}

let Ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);
Ostap.getInfo();
Ostap.marks;
Ostap.marks = 5;
Ostap.getAverageMark();
Ostap.dismiss();
console.log(Ostap.rating);
Ostap.recover();
console.log(Ostap.rating)
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

class BudgetStudent extends Student {
    constructor(university, course, fullName, rating) {
        super(university, course, fullName, rating);

    }

    getScholarship() {
        console.log('Ви отримали 1400грн стипендії');
    }

}

let student2 = new BudgetStudent();
student2.getScholarship();

/*
Advanced
1.Створіть новий клас BudgetStudent, який повністю наслідує клас Student
2. Бюджетний студент може отримати стипендію за допомогою методу
this.getScholarship.
Отримання стипендії супроводжується виведенням інформації в консоль: Ви
отримали 1400 грн. стипендії
3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
створення об'єкту. Підказка: викликайте його в constructor
4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього
вище або дорівнює 4.0
5. Якщо студента виключено, він не отримує стипендію (думаю це було і так
очевидно :)
*/

