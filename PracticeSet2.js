//Solution 1

const prime = (n) =>{
    let count = 0;
    for(let i=1;i<n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count>1){
        return ("Not Prime");
    }
    else{
        return ("is Prime");
    }
}
const res = prime(79);
console.log(res);

//Solution 2

const palindrome = (n) =>{
    org=n;
 rev=0;

    while(n>0){
       dig=n%10;
       rev=rev*10+dig;
        n=parseInt(n/10);


    }
   
    if (rev==org){
        output = "Is palindrome";
    }
    else{
        output = "Not palindrome";
    }
    return output;
}
const res1=palindrome(121);
console.log(res1);

//solution 3

const reverse = (n) =>{
    org=n;
 rev=0;

    while(n>0){
       dig=n%10;
       rev=rev*10+dig;
        n=parseInt(n/10);


    }
    return rev;
}
const res2 = reverse(453);
console.log(res2);

//solution 4
const primeAll = (start, end)=>{
    let arr=[];
    count=0;
    for(let i=start+1 ;i<end;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                count++;
            }
          
        }
        if(count==0){
            arr.push(i);
        }
        count=0;
    }
    return arr;
}
const res3=primeAll(4,20);
console.log(res3);

//solution 5
const fibonacci = (n) => {

let a = 0, b = 1, nextTerm;
let arr1=[];
for (let i = 1; i <= n; i++) {
    arr1.push(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}
return arr1;
}
const res4=fibonacci(9);
console.log(res4);

