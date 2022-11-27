
// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.


var countries = ["Ethiopia", "India", "Japan", "Berlin", "Spain"];

if (countries.includes("Ethiopia")) {
  console.log("Ethiopia".toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}
