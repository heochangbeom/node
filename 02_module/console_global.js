const arr = [
  { name: "John Doe", email: "John@email.com" },
  { name: "John Doe", email: "John@email.com" },
];
console.table(arr);

const obj = {
  students: {
    grade1: {
      classA: {
        section1: { student: "Eve", score: 77 },
        section2: { student: "Frank", score: 82 },
      },
      classB: {
        section1: { student: "Grace", score: 91 },
        section2: { student: "Henry", score: 87 },
      },
    },
    grade2: {
      class2: {
        section1: { student: "Alice", score: 95 },
        section2: { student: "Bob", score: 88 },
      },
      class3: {
        section1: { student: "Charlie", score: 90 },
        section2: { student: "Diana", score: 85 },
      },
    },
    teachers: ["John Doe", "Jeremy Go"],
  },
};
console.dir(obj, { depth: 1, colors: true });
console.dir(obj, { depth: 2, colors: true });
console.dir(obj, { depth: 3, colors: true });
console.dir(obj, { depth: 4, colors: true });

console.log();
