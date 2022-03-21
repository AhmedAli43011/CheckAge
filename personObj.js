// let person={
//     age:5 
// };

var val = document.getElementById("age");
function checkAge() {

    if (val.value< 20) {
        console.log("teenager")
    }
    else if (val.value >= 20 && val.value< 35) {
        console.log("adult")
    }
    else if (val.value >= 35 && val.value< 60) {
        console.log("senior")
    }
    else if (val.value >= 60 && val.value< 80) {
        console.log("old")
    }
    else {
        console.log("wrong age")
    }
}



