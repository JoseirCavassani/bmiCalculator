function bmiCalculator() {
  let weight = document.getElementById("kg").value;
  let height = document.getElementById("cm").value;

  if (weight == "" || height == "") {
    alert("Please fill in all fields");
    location.reload();
  } else {
    bmi = (weight / height ** 2).toFixed(1);

    if (bmi < 18.5) {
      bmiRange = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiRange = "Healthy";
    } else if (bmi >= 25 && bmi <= 30) {
      bmiRange = "Overweight";
    } else if (bmi > 30) {
      bmiRange = "Obesity";
    } else {
      return null;
    }

    document.getElementById("kg").innerHTML = weight;
    document.getElementById("cm").innerHTML = height;
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("bmiRange").innerHTML = bmiRange;

    if (bmiRange == "Underweight") {
      document.getElementById("bmiRange").style.backgroundColor = "yellow";
      document.getElementById("bmiRange").style.color = "black";
    } else if (bmiRange == "Healthy") {
      document.getElementById("bmiRange").style.backgroundColor = "green";
      document.getElementById("bmiRange").style.color = "white";
    } else if (bmiRange == "Overweight") {
      document.getElementById("bmiRange").style.backgroundColor = "orange";
      document.getElementById("bmiRange").style.color = "white";
    } else {
      document.getElementById("bmiRange").style.backgroundColor = "red";
      document.getElementById("bmiRange").style.color = "white";
    }
  }
}
