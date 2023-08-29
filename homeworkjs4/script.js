const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


let pair = [];
for (let i = 0; i < students.length; i++) {
    pair.push([students[i], students[i + 2]]);

}
console.log(pair);