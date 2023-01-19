var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here
// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let’s get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Happy Hump Day!");
} else if (weekday === "Thursday") {
  console.log("It's Friday Eve!");
} else if (weekday === "Friday") {
  console.log("Thank God it's Friday");
} else {
  console.log("WEEKEND, YAYYY!!!");
}
