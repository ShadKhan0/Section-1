const nums = [12, 34, 54, 67, 89];

//map

const sqArray = nums.map((a) => {
  return a ** 2;
});
console.log(sqArray);
 

//ques
const price = [23.4, 65.7, 89.6, 45.78];

const intArr= price.map((a)=>{
    return parseInt(a);
})
console.log(intArr);

//filter

const evenNum= nums.filter((n) =>{
return n%2==0;
});
console.log(evenNum);


//filter prices greater than 50 and less than 300

const prices=[456,12,43,67,89,76,899,233];

const newPrices= prices.filter((p) => {
    return p>50&&p<300;
});
console.log(newPrices);