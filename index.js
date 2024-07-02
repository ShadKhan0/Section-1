//1st question
let a=42;
if(a>70 && a<120){
    console.log("Exists");
}
else{
    console.log("Doesn't exist");
}

//2nd question
let age=22;
let aadhar= true;
if(age>18 && aadhar==true){
    console.log("Eligible for DL");
}
else{

console.log("Not eligible");
}
//3rd question
let numb1=30;
let numb2=21;
let numb3=10;
let max=numb1;
if(numb2>max){
    max=numb2;
    console.log("Greatest number="+max);
}
else if(numb3 > max){
    max=numb3;
    console.log("Greatest number="+ max);
}
else{
    console.log("Greatest number="+ max); 
}
//4th question
let number=36;
let count=0;
for(let i=1;i<number;i++){
    if((i*i)==number){
        count++;
    }
}
if(count>0){
    console.log("Perfect square");
}
else{
    console.log("Not Perfect Square");
}
//5th question
let no=42;
if(no%6==0 && no%7==0){
    console.log("Divisible by 6 & 7");
}
else{
    console.log("Not Divisible by 6 & 7");
}

