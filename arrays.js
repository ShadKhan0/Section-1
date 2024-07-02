const arr = [634, "true", console.log, undefined];
console.log(arr);
console.log(Array.isArray(arr));
console.log(typeof arr);
console.log("\n\n\n");

const movies = [
  "300",
  "John Wick",
  "Deadpool",
  "Expendables",
  "Inception",
  "MI",
]; // expendables=godfather

// indexing
console.log(movies[3]);
console.log(movies.indexOf("Inception"));
console.log(movies.at(-2)); //works wtith string
movies[3] = "Godfather";
console.log(movies.at(3)); //works with string

///slicing

console.log(movies.slice(0, 4)); //also works with string
console.log(movies.slice(-3));

//concating
console.log("somethung".slice(2, 5)); //also works with string
console.log(movies[2].slice(-4).at(0));

///adding and removing elements
movies.push("Kanchana");//addds element at the end
console.log(movies);
movies.unshift('Godzilla');
console.log(movies);
console.log( movies.pop());// returns result in terminal
console.log(movies);
movies.shift();
console.log(movies);
// movies.splice(3,2);// 3 is index and 2 is number of elements to be removed
movies.splice(3,2,'Gangs of wasseypur','The boys' ,'Invincible')// first remove 2 element and add elements from that index and pushing elements number doesnot matter
console.log(movies);
