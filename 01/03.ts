interface Student {
  name: string;
  marks: number[];
}

// Round num to dec decimal places
function round(num: number, dec: number) {
  const factor: number = Math.pow(10, dec);
  return Math.round(num * factor) / factor;
}

function calculateAverage(marks: number[]): number {
  return marks.reduce((total, mark) => total + mark, 0) / marks.length;
}

function displayResult(student: Student) {
  const studentName: string = student.name;
  const gradeAverage: number = calculateAverage(student.marks);

  console.log(`${studentName} scored ${round(gradeAverage, 2)}`);
}

function grades(students: Student[]) {
  students.forEach((student) => {
    displayResult(student);
  });
}

grades([
  {
    name: "Alice",
    marks: [80, 90, 100],
  },
  {
    name: "Bob",
    marks: [70, 85, 95],
  },
]);
