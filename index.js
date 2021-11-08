function bmicalc() {
    var list = {
        name: document.getElementById("user_name").value,
        gender: ['M', 'F'],
        userBMI: 'BMI:',
        rangeBMI: ['Underweight', 'Normal', 'Overweight', 'Obesse']
    };
    
    var x = document.getElementById("weight").value;
    var y = document.getElementById("height").value;
    var bmi = x / (y * y);

    if (bmi < 18.5) {
        document.getElementById("texthere").innerHTML = (list.name + ' | ' + list.gender + ' | ' + 'BMI: ' + parseInt(bmi) + ' | ' + list.rangeBMI[0])
    }
    if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("texthere").innerHTML = (list.name + ' | ' + list.gender + ' | ' + 'BMI: ' + parseInt(bmi) + ' | ' + list.rangeBMI[1])
    }  
    if (bmi >= 25 && bmi < 30) {
        document.getElementById("texthere").innerHTML = (list.name + ' | ' + list.gender + ' | ' + 'BMI: ' + parseInt(bmi) + ' | ' + list.rangeBMI[2])
    }  
    if (bmi >= 30) {
        document.getElementById("texthere").innerHTML = (list.name + ' | ' + list.gender + ' | ' + 'BMI: ' + parseInt(bmi) + ' | ' + list.rangeBMI[3])
    }
}



