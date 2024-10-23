function workWArrays() {
    // let fruits = [];
    let fruits2 = new Array();
    let fruits3 = ["apple","berry","cherry", 44];
    fruits3[3] = "donut";
    fruits3.push("eggs");
    console.log(`fruits size = ${fruits3.length}`);
    console.log(fruits3);

    let appleCherry = fruits3[0] + fruits3[2];
    // create
    for(let i=0; i<fruits3.length; i++){
        console.log(fruits3[i]);
    }
    console.log("--------------------")
    fruits3.forEach((fruit, index)=>{
        console.log(`index: ${index} value: ${fruit}`);
    })

    //removing first element
    let f1= fruits3.shift();
    console.log(fruits3);
    //removing last element
    let f2 = fruits3.pop();

    let idx = fruits3.indexOf("cherryxxxxxxxxxx");
    console.log(`index: ${idx}`);

    console.log("------------------")

    let fruits = ["A", "B", "C", "D", "E", "F"];
    let someFruits = fruits.slice(0,2);
    console.log(someFruits);

    let lowercase = fruits.map(fruit => fruit.toLowerCase());
    console.log(lowercase);

    fruits.sort();
    fruits.reverse();

    if (fruits.includes("apple")){
        console.log("apple");
    }


}