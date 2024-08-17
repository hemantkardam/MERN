const prompt = require('prompt-sync')()

let a=prompt('Enter your marks :');


if(a<=100 && a>90){
    console.log('You achieve a 9 Cgpa.');
}

else if(a<=90 && a>80){
    console.log('You achieve a 8 Cgpa.');
}

else if(a<=80 && a>70){
    console.log('You achieve a 7 Cgpa.');
}


else if(a<=70 && a>60){
    console.log('You achieve a 6 Cgpa.');
}

else if(a<=60 && a>50){
    console.log('You achieve a 5 Cgpa.');
}

else if(a<=50 && a>40){
    console.log('You achieve a 4 Cgpa.');
}

else if(a<=40 && a>32){
    console.log('You achieve a 3 Cgpa.');
}


else {
    console.log('You are Fail.');
}