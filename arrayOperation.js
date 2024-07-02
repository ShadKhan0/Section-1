const fruits = [
  "Mango",
  "Banana",
  "Apple",
  "Orange",
  "Pineapple",
  "grapes",
  "Guava",
  "Papaya",
];

//solution 1
console.log(fruits.slice(3));
//solution 2
fruits.splice(2, 3);
console.log(fruits);

//solution3

fruits.splice(-2, 0, "melon", "cherry");
console.log(fruits);

//solution 4
let n = fruits.length;
for (let i = 0; i < n; i++) {
  if (fruits[i] === "Mango") {
    fruits.splice(fruits[i], 1);
    break;
  }
}
console.log(fruits);

//dusra tareeka
n = fruits.indexOf("grapes");
fruits.splice(n, 1);
console.log(fruits);


//traversal operations -to access each element in array one by one
const nums=[36,19,10,3,6,15,48];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log(" for of loop tareeka");
for(let n of nums){
    console.log(n);
}
console.log('using for each function');
nums.forEach((a, i,o) => {  // pehla para element dega aur dusra hmesha index dega teesre para se array aaegi
    console.log(a*a ,i);
});
nums.forEach( a => console.log(a**2));


//only even nums
let newArr=[];
nums.forEach(a => {
    if(a%2===0){
        newArr.push(a);
    }
})
console.log(newArr);


