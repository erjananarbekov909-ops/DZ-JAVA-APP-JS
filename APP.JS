// Подсчёт карт платёжной системы VISA

const cards = [
  "46782346",
  "45781218",
  "79874568",
  "12157845",
  "36151845",
  "41250895",
  "41201961"
];

let visaCount = 0;

for (let i = 0; i < cards.length; i++) {
  if (cards[i].startsWith("4")) {
    visaCount++;
  }
}

console.log(`Карт VISA ${visaCount} из ${cards.length}.`);

// Вывод: Карт VISA 4 из 7.


//Статистика по ИНН (компании, женщины, мужчины)

const innList = [
  "01212201212345",
  "11212201212345",
  "21212201212345",
  "11212201212345",
  "11212201212345",
  "01212201212345",
  "21212201212345"
];

let companies = 0;
let women = 0;
let men = 0;

for (const inn of innList) {
  const firstChar = inn[0];

  if (firstChar === "0") {
    companies++;
  } else if (firstChar === "1") {
    women++;
  } else if (firstChar === "2") {
    men++;
  }
}

console.log(`Статистика по ИНН: компаний — ${companies}, женщин — ${women}, мужчин — ${men}.`);
// Вывод: Статистика по ИНН: компаний — 2, женщин — 3, мужчин — 2.


//Сжатие массива (удаление нулей)

const numbers = [0, 3, 0, 12, 5, 0, 1];
const compressed = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 0) {
    compressed.push(numbers[i]);
  }
}

console.log("Исходный массив:", numbers);
console.log("Результат:", compressed);


// Результат: [3, 12, 5, 1]