// var name = "ali"; 
// var num=4;
// if(num>2){
//     var name="reza";
// }
// console.log(name);
// const usser={name:"ali",age:20};
// usser.name="reza";
// console.log(usser); 
// function num(a,b){
//     //comand
//     return;
// }
// const res=  num(10,20);
// const arow=(a,b)=>{
//     let res=a+b;
//     return res;
// }
// const sum=arow(10,20); 
// console.log(sum);
// const test= (a=12 ,b = 200 ,c = 1) => {
//     console.log(a , b ,c);
// }
// test( undefined,30 , "ali");
// const ar1=[1,2,3];
// const ar2=[...ar1,10,11];
// console.log(ar2);
// let laptop={name:"apple" , price:10000 , count:1 , count :20};
// console.log(laptop)
// let laptop={name:"appel" , price:10000 ,count:1 };
// let laptpo2={...laptop , count : laptop.count+1};
// console.log(laptpo2);
// const test= (...data) => {
//     console.log(...data);
// }
// test(12 , "ali" , true);
// const rest=(name , familly , ...data) => {
//     let res = [name ,  familly , ... data ] ;
//     console.log(...res);
// }
// const p =123;
// rest("mehrab" , "sajjadi" , 12 , true , p);
// const test = (name , family , ...data) => {
//     let res = [name ,  family , ...data ] ;
//     console.log(...res);
// }
// test("mehrab" , "sajjadi " , true );
// const laptop = {name:"azus" , model:"RPG" ,count:1};
// const price ={...laptop, count: laptop.count+1};
// console.log(price);
const ary1=[
    {name:"iphone 10" , price:10000},
    {name:"iphone 11" , price:11000},
    {name:"iphone 12" , price:12000},
    {name:"iphone 13" , price:13000},
]
const name_ary = ary1.map((item , index) => {
    console.log(index);
     return item.name; 
}) ; 
console.log(name_ary)
// const fil=ary1.filter( (item) => {
//     return item.price > 11000 ;
    
// });
// console.log(...fil);
// const ary2=["ali","mehrab","reza"];
// const [a , b , c , d="hamid"]= ary2 ;
// console.log(a , b , c , d);
// console.log(b);
// console.log(c);
// console.log(d);
// const ware = {name : "iphone 13" , price : 11000};
// const {name , price}= ware;
// price = 10;
// console.log(name);
// console.log(price)
// const fun = ({name})=>{
//     console.log(name);
// }
// fun(ware);
