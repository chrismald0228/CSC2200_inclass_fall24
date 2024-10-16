let msg = "Hello World";
function calcMPG(){
    let miles = parseFloat(document.getElementById("miles").value);
    let gallons = parseFloat(document.getElementById("gallons").value);
    if (isNaN(miles) || isNaN(gallons)) {
        msg = "Error: miles or gallons NaN";
        outputError(msg);
    }
    else if (miles < 0 || gallons < 0) {
        msg = "Error: Miles or Gallons < 0"
        outputError(msg);
    }
    else {
        let mpg = miles/gallons;
        showValues(miles, gallons, mpg);
    }
}
function showValues(miles, gallons,mpg){
    let obj = document.getElementById("results");
    obj.innerHTML = `Miles: ${miles} Gallons: ${gallons} MPG: ${mpg}`;
}
function outputError(miles, gallons, mpg){
    let obj = document.getElementById("results");
    obj.innerHTML = "<span style='color:red'>"+msg+"</span>";
}
