document.getElementById("calc").onclick = function() {myFunction_m()};


function myFunction_m() {

    document.getElementById("calc_form").style.display = "none";
    document.getElementById("results").style.display = "block";

    //Valor de la estutura
    var metros = document.getElementById("estatura").value;
    console.log(metros)
    //Valor del peso
    var kilogramos = document.getElementById("peso").value;

    //Calculo BMI
    var bmi = Math.round(kilogramos*10 / ((metros/100) * (metros/100))) /10;
    console.log(bmi)
    //Calcular el peso mínimo y máximo para un BMI normal
    var minweight = (metros/100) * (metros/100) * 18.5;
    var maxweight = (metros/100) * (metros/100) * 24.9;
    var minweight = Math.round(minweight*10)/10; 
    var maxweight = Math.round(maxweight*10)/10;


    //Agregar valores a etiquetas HTML específicas
    // function text() {
    //     document.getElementById("hResults").innerHTML = "Estatura: " + metros + " centimetros";
    //     document.getElementById("wResults").innerHTML = "Peso: " + kilogramos + " kilogramos";
    //     document.getElementById("bmiNum").innerHTML = bmi;
    //     document.getElementById("MinW").innerHTML = minweight;
    //     document.getElementById("MaxW").innerHTML = maxweight;
    // }
    document.getElementById("hResults0").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults0").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("hResults1").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults1").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("hResults2").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults2").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("hResults3").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults3").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("hResults4").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults4").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("hResults5").innerHTML = "Estatura: " + metros + " centimetros";
    document.getElementById("wResults5").innerHTML = "Peso: " + kilogramos + " kilogramos";
    document.getElementById("bmiNum1").innerHTML = bmi;
    document.getElementById("bmiNum2").innerHTML = bmi;
    document.getElementById("bmiNum3").innerHTML = bmi;
    document.getElementById("bmiNum4").innerHTML = bmi;
    document.getElementById("bmiNum5").innerHTML = bmi;
    document.getElementById("MinW1").innerHTML = minweight;
    document.getElementById("MinW2").innerHTML = minweight;
    document.getElementById("MinW3").innerHTML = minweight;
    document.getElementById("MinW4").innerHTML = minweight;
    document.getElementById("MinW5").innerHTML = minweight;
    document.getElementById("MaxW1").innerHTML = maxweight;
    document.getElementById("MaxW2").innerHTML = maxweight;
    document.getElementById("MaxW3").innerHTML = maxweight;
    document.getElementById("MaxW4").innerHTML = maxweight;
    document.getElementById("MaxW5").innerHTML = maxweight;

    if (bmi < 18.5) {
        //ERROR
        document.getElementById("error").style.display = "block";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        //document.getElementsByClassName("commission-table2__description").style.display = "none";
        // text();
        //document.getElementsByClassName("bmi_results").style.display = "none";
        document.getElementById("bmi_type1").innerHTML = "Normal";
        document.getElementById("normal").style.display = "block";
        document.getElementById("T_normal1").classList.add("highlight");
        document.getElementById("T_normal2").classList.add("highlight");
        document.getElementById("T_normal3").classList.add("highlight");
        document.getElementById("bmi_table")
    }
    else if (bmi >= 25 && bmi < 30) {
        //document.getElementsByClassName("commission-table2__description").style.display = "none";
        // text();
        //document.getElementsByClassName("bmi_results").style.display = "none";
        document.getElementById("bmi_type2").innerHTML = "Sobrepeso";
        document.getElementById("overweight").style.display = "block";
        document.getElementById("T_overweight1").classList.add("highlight");
        document.getElementById("T_overweight2").classList.add("highlight");
        document.getElementById("T_overweight3").classList.add("highlight");
        document.getElementById("bmi_table")
    }
    else if (bmi >= 30 && bmi < 35) {
        //document.getElementsByClassName("commission-table2__description").style.display = "none";
        // text();
        //document.getElementsByClassName("bmi_results").style.display = "none";
        document.getElementById("bmi_type3").innerHTML = "Obesidad grado I";
        document.getElementById("obese").style.display = "block";
        document.getElementById("T_obese1").classList.add("highlight");
        document.getElementById("T_obese2").classList.add("highlight");
        document.getElementById("T_obese3").classList.add("highlight");
        document.getElementById("bmi_table")
    }
    else if (bmi >= 35 && bmi < 40) {
        //document.getElementsByClassName("bmiresults").style.display = "none";
        // text();
        //document.getElementsByClassName("bmi_results").style.display = "none";
        document.getElementById("bmi_type4").innerHTML = "Obesidad grado II";
        document.getElementById("big-obese").style.display = "block";
        document.getElementById("T_big-obese1").classList.add("highlight");
        document.getElementById("T_big-obese2").classList.add("highlight");
        document.getElementById("T_big-obese3").classList.add("highlight");
        document.getElementById("bmi_table")
    }
    else if (bmi >= 40) {
        //document.getElementsByClassName("bmiresults").style.display = "none";
        // text();
        //document.getElementsByClassName("bmi_results").style.display = "none";
        document.getElementById("bmi_type5").innerHTML = "Obesidad grado III";
        document.getElementById("super-obese").style.display = "block";
        document.getElementById("T_super-obese1").classList.add("highlight");
        document.getElementById("T_super-obese2").classList.add("highlight");
        document.getElementById("T_super-obese3").classList.add("highlight");
        document.getElementById("bmi_table");
    }
    else {
        //ERROR
        document.getElementById("error").style.display = "block";

    }
    //INPUTS RESTART
    document.getElementById("estatura").value = "";
    document.getElementById("peso").value = "";
}

document.getElementById("calc_back").onclick = function() {myFunction_back()};

function myFunction_back() {
    console.log("PERRO")
    document.getElementById("calc_form").style.display = "block";
    document.getElementById("results").style.display = "none";

    //document.getElementsByClassName("bmi_results")[1].style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("normal").style.display = "none";
    document.getElementById("overweight").style.display = "none";
    document.getElementById("obese").style.display = "none";
    document.getElementById("big-obese").style.display = "none";
    document.getElementById("super-obese").style.display = "none";

    document.getElementById("T_normal1").classList.remove("highlight");
    document.getElementById("T_normal2").classList.remove("highlight");
    document.getElementById("T_normal3").classList.remove("highlight");
    document.getElementById("T_overweight1").classList.remove("highlight");
    document.getElementById("T_overweight2").classList.remove("highlight");
    document.getElementById("T_overweight3").classList.remove("highlight");
    document.getElementById("T_obese1").classList.remove("highlight");
    document.getElementById("T_obese2").classList.remove("highlight");
    document.getElementById("T_obese3").classList.remove("highlight");
    document.getElementById("T_big-obese1").classList.remove("highlight");
    document.getElementById("T_big-obese2").classList.remove("highlight");
    document.getElementById("T_big-obese3").classList.remove("highlight");
    document.getElementById("T_super-obese1").classList.remove("highlight");
    document.getElementById("T_super-obese2").classList.remove("highlight");
    document.getElementById("T_super-obese3").classList.remove("highlight");
}

