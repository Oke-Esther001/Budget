function goHome() {
    console.log("I will go home");
}

const goHomes = () => {
    console.log("It is food i want");
}

setTimeout(()=>{
    console.log("99");
},6000)

const checkResult = () => {
    let food = "rice"
    let drink = "fanta"
    if (food=="rice" && drink=="sosa") {
        // console.log("I am satisfied");
        return "I am satisfied"
    } else{
        return "I am not satisfied"
    }
}
console.log(checkResult());