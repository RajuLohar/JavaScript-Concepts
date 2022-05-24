// const a=true;
// if(a) console.log(true);
// else console.log(false);

// a ? console.log(true) : console.log(false);


b=2;
while(b<3){
    console.log("In While",b);
    b++;
}
b=1;

do{
    b++;
    if(b==2)
    continue;
    console.log("In do while",b);
}while(b<3)

// switch(b){
//     case 1:
//         console.log("switch case 1");
//         break;
//     case 2:
//         console.log("switch case 2");
//         break;
//     default:
//         console.log("no data");
// }

let x = 10;
let y = (x++, x + 1);  // comma operator assign 2nd argument to the variable

console.log(x, y); 