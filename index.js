const number = [0, 3, 2, 4, 1000, 68];

console.log(
  number.sort(function (a, b) {
    return a - b;
  })
);

const months = [
  { month: "March", num: 3 },
  { month: "Jan", num: 1 },
  { month: "Feb", num: 2 },
  { month: "Dec", num: 12 },
  { month: "may", num: 5 },
  { month: "june", num: 6 },
  { month: "aug", num: 8 },
];

const sorted = months.sort((a, b) => b.num - a.num);
console.log(sorted);

const s =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae deleniti obcaecati, accusantium ut veniam quasi quidem dolorum impedit at!";

console.log(
  s
    .split(" ")
    .filter((word) => word.length > 3)
    .sort((a, b) => a - b)
);

const person = [
  {
    name: "safras",
    age: 22,
  },
  {
    name: "mohamed",
    age: 31,
  },
  {
    name: "imthiyas",
    age: 29,
  },
  {
    name: "ishalina",
    age: 3,
  },
  {
    name: "mohamed safras",
    age: 22,
  },
  {
    name: "riyas",
    age: 25,
  },
  {
    name: "haris",
    age: 23,
  },
];

const sortedByAge = person
  .sort((a, b) => a.age - b.age)
  .filter((a) => a.age > 22)
  .map((item) => `${item.name} - ${item.age}`);

console.log(sortedByAge);

const redusedAge = person.reduce((total, totAge) => total + totAge.age, 0);
console.log(redusedAge);
console.log();

function mul(a, b) {
  let Arow = a.length,
    Acol = a[0].length,
    Brow = b.length,
    Bcol = b[0].length,
    m = new Array(Arow);

  if (Acol != Brow) {
    console.log("error");
  } else {
    for (let i = 0; i < Arow; i++) {
      m[i] = new Array(Bcol);
      for (let j = 0; j < Bcol; j++) {
        m[i][j] = 0;
        for (let k = 0; k < Acol; k++) {
          m[i][j] += a[i][k] * b[k][j];
        }
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; r++) {
    console.log(m[r]);
  }
}

let a = [
  [1, 3, 5],
  [2, 4, 4],
  [2, 3, 2],
];

let b = [
  [1, 1, 2],
  [2, 4, 1],
  [1, 2, 3],
];
console.log("matrix a:");
display(a);
console.log("matrix b:");
display(b);
console.log("a * b = : ");
display(mul(a, b));

let mark = [1, 2, 3, 4, 5, 6, 6, 7, 6];
let sum = 0;
for (let i = 0; i < mark.length; i++) {
  sum += mark[i];
}
console.log(sum);

const Employee = require("./Employee");

const e2 = new Employee("Safradsa", 222, "blue");

console.log(
  `your name is ${(e2.name = "ashdjk")}, your age is ${(e2.age = 30)},`,
  e2.color
);
e2.draw();

const z = [12, 10, 100];
const y = [23, 199, 23];

const c = z.sort((a, b) => a - b).concat(y.sort((a, b) => a - b));

console.log(c);
console.log(c);

let number1 = "20.9999";
let number2 = "20.42";
let number3 = parseFloat(number1) + parseFloat(number2);
console.log(parseFloat(number3.toFixed(2)));

const sayHello = async () => {
  return "hello world";
};

const func = async () => {
  const result = await sayHello();
  console.log(result);
};
func();

const resolveAfter2Seconds = (name) => {
  return new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    } else {
      reject(err);
    }
  });
};

const asynccall = async (data) => {
  const result = await resolveAfter2Seconds(data);
  console.log(result);
};

//asynccall("mohamed safras");

const users = [
  {
    id: 1,
    name: "safras",
  },

  {
    id: 2,
    name: "mohamed safras",
  },
  {
    id: 3,
    name: "mohamed",
  },
];

const articals = [
  {
    userid: 1,
    title: ["one", "two", "three"],
  },
  {
    userid: 2,
    title: ["four", "five", "six"],
  },
  {
    userid: 3,
    title: ["seven", "eight", "nine"],
  },
];

const getuser = (name) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const user = users.find((user) => user.name === name);
        if (user) {
          return resolve(user);
        } else {
          reject(`no user match ${name}`);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  });
};

const getArtical = (userId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const artical = articals.find((user) => user.userid === userId);
        if (artical) {
          return resolve(artical.title);
        } else {
          reject(`no id match`);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  });
};
/*getuser("mohamedss")
  .then((user) => getArtical(user.id))
  .then((artical) => console.log(artical))
  .catch((error) => console.log(error));
*/
const getData = async (names) => {
  try {
    const user = await getuser(names);
    const artical = await getArtical(user.id);
    console.log(artical);
  } catch (error) {
    console.log(error);
  }
};

getData("safras");
