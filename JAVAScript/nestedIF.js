const prompt=require(`prompt-sync`)()

let ah = prompt('Enter animal Height : ');

if(ah<=1){
    console.log("Animal is short")
    let squeak = prompt('can / Cannot Squeak : ');
    if(squeak=="cannot" || squeak=="Cannot" || squeak=="CANNOT"){
        console.log("Might be squirrel.");
    }
    else if(squeak=="can" || squeak=="Can" || squeak=="CAN" ){
        console.log("Might be Rat.");
    }
}

else if(ah>1){
    console.log("Animal is Tall.");
    let neck = prompt('Enter animal neck is long or not : ');
    if(neck=="yes" || neck=="Yes" || neck=="YES"){
        console.log("Might be giraffe.")
    }
    else if(neck=="no" || neck=="No" || neck=="NO"){
        let nose = prompt('Enter a animal nose is long or not :');
        if(nose=="yes" || nose=="Yes" || nose=="YES"){
            console.log("Might be Elephant");
        }
        else if(nose=="no" || nose=="NO" || nose=="No"){
            let  live = prompt('Where dose it live, on land or in water :');
            if(live== "land" || live== "Land" || live== "LAND"){
                console.log("Might be Rhino");
            }
            else if(live=="water" || live=="Water" || live=="WATER"){
                console.log("Might be Hippo");
            }
        }
    }
}