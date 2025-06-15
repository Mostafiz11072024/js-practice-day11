// Question 1: গ্রেড মেকিং
function getGrade(mark) {
  if (mark >= 80) return "A+";
  else if (mark >= 70) return "A";
  else if (mark >= 60) return "A-";
  else if (mark >= 50) return "B";
  else if (mark >= 40) return "C";
  else return "F";
}
console.log("Grade:", getGrade(85));

// Question 2: নাম দিয়ে ছেলে না মেয়ে
function detectGender(name) {
  const girls = ["Sumaiya", "Ritu", "Tania"];
  const boys = ["Rahim", "Karim", "Mamun"];
  if (girls.includes(name)) return "Girl";
  else if (boys.includes(name)) return "Boy";
  else return "Unknown";
}
console.log("Gender:", detectGender("Ritu"));

// Question 3: ১-২০ পর্যন্ত বিজোড় যোগফল
let sumOdd = 0;
for (let i = 1; i <= 20; i += 2) sumOdd += i;
console.log("Odd Sum (1-20):", sumOdd);

// Question 4: কল পাওয়া কি না
function checkCaller(name) {
  const list = ["Karim", "HeroAlom"];
  return list.includes(name) ? "Got call" : "No call";
}
console.log(checkCaller("HeroAlom"));

// Question 5: ৩ বা ৫ এর গুণিতক
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) console.log(i);
}

// Question 6: ৫টি ইউনিক নাম
let friends = ["rahim", "karim", "abdul", "heroAlom", "rahim", "karim"];
let unique = [...new Set(friends)];
console.log("First 5 unique:", unique.slice(0, 5));

// Question 7: বিজোড় সংখ্যা বের করা
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = numbers.filter(n => n % 2 !== 0);
console.log("Odd Numbers:", odd);

// Question 8: উপরের Odd যোগফল
let total = 0;
odd.forEach(n => total += n);
console.log("Sum of Odds:", total);
