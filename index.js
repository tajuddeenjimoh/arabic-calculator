function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    var إضافة = num1 + num2;
    var الطرح = num1 - num2;
    var الضرب = num1 * num2;
    var قسم = num2 !== 0 ? (num1 / num2) : "لا يمكن القسمة على الصفر";

    document.getElementById("إضافة").textContent = "إضافة: " + إضافة;
    document.getElementById("الطرح").textContent = "الطرح: " + الطرح;
    document.getElementById("الضرب").textContent = "الضرب: " + الضرب;
    document.getElementById("قسم").textContent = "قسم: " + قسم;
}
