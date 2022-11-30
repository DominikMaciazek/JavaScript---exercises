function bmiCalculator(weight, height){
    var result = weight / (height*height);
    if (result <18.5){
        console.log("Your BMI is "+ result + "so you are underweight.");
    }if (result >= 18.5 && result <= 24.9){
        console.log("Your BMI is "+ result + "so you are normal weight.");
    }if (result > 24.9)
        console.log("Your BMI is "+ result + "so you are overweight.");
    }

    
var bmi = bmiCalculator(80, 1.8); 





