function calculateBMI() {
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var genderSelect = document.getElementById('gender');
    var ageInput = document.getElementById('age');

    var resultContainer = document.getElementById('bmiResult');

    if (!heightInput || !weightInput || !genderSelect || !ageInput || !resultContainer){
        console.error("Error: Incomplete elements.");
        return;
    }

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    var gender = genderSelect.value.toLowerCase();
    var age = parseInt(ageInput.value);

    if (isNaN(height) || isNaN(weight) || isNaN(age)){
        resultContainer.innerHTML = "Please enter valid values for height, weight, and age.";
        return;
    }

    if (gender !== "male" && gender !== "female"){
        resultContainer.innerHTML = "Please select 'Male' or 'Female' for gender.";
        return;
    }

    var bmi = weight / (height * height);

    resultContainer.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Gender: " + gender + "<br>Age: " + age;
}
