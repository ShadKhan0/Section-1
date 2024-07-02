function addnum(a,b){
    var c=a+b;
    console.log(c);
}
addnum(2,4);


//dusra tareeka 
const getAvg= function(m1,m2,m3, m4=90){//default value
const avg= (m1+m2+m3+m4)/3;

return avg;
// console.log(avg);
}
const res= getAvg(2,3,7,8);
console.log(res);

//arrow function

const factorial = (n)=>{
    let f=1;
    for(let i=2;i<=n;i++){
        f*=i;
    }
    return f;
}
const ans = factorial(5);
console.log(ans);
//use of tuple in js
//array destructuring

let [a, b, c]= [10, 5,34]; // let because we have to swap values
[b,c]=[c,b];//swapping
console.log(b, c);

const [name1, , name3 ,, name5]=['ramu','shamu', 'lallu', 'godi', 'kalu'];
console.log(name3)


const getReport = (m1,m2,m3,m4, max=100) => {
const avg= getAvg(m1,m2,m3,m4);
const percentage= (avg/max)*100;
return [avg, percentage];  //returning double values in a function 
}
const [v1,v2]=getReport(20,30,70,80, 200);
console.log(v1, v2);


//WAP to take sstart and end as parameter and print all numbers divisible by 7 and also print sum of all numbers

const divisible = (start, end) =>{
   
    sum=0;
    for(let i=start+1 ; i<end;i++){
        if(i%7==0){
            sum+=i
            console.log("numbers"+i);
            
        }
       
       
    }
    return ("sum ="+ sum );
}

const result= divisible(15,30);
console.log(result);