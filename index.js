const names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];
const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];
const mixed = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mr. Hakim",
  "Mrs. Paula",
  7,
  22
];

console.log("\n Level 0");

// Lv 0
const lv0 = names.map(name => console.log(name));

console.log("\n Level 1");

// Lv 1
const lv1 = names.filter(name =>
  name.includes("Mr.") ? console.log(name) : ""
);

console.log("\n Level 2");

// Lv 2
const lv2 = names.map((name, i) => {
  if (name.includes("Mr.")) console.log(`${i + 1}. ${name} (male)`);
  else if (name.includes("Mrs.")) console.log(`${i + 1}. ${name} (female)`);
});

console.log("\n Level 3");

//Lv 3
const lv3 = names => {
  const search_name = name =>
    names.filter(x => (x.includes(name) ? console.log(x) : ""));
  search_name("Hakim");
};

lv3(names);

console.log("\n Level 4");

//Lv 4

const lv4 = (names1, names2) => {
  console.log(names1.concat(names2));
};

lv4(names1, names2);

console.log("\n Level 5");

//Lv 5
const data = [];

const lv5 = mixed.filter(string =>
  typeof string == "string" ? data.push(string) : ""
);

console.log(data);
