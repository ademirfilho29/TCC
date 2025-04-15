function Email_Validation(field){

    user= field.value.substring(0, field.value.indexOF("@"))
    domain = field.value.substring(field.value.indexOF("@") + 1, field.value.length);

    if ((user.lenght >= 1) &&
        (domain.lenght >= 3) &&
        (user.search("@") == -1)&&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") ==  -1) &&
        (domain.search(".") !==-1) &&
        (domain.indexOF(".") >= 1) &&
        (domain.indexOf(".") < domain.length -1)){
            document.getElementById("email").innerHTML="E-mail valido";
            alert("Email Valido")
        }
        else {
            document.getElementById("email").innerHTML="<font color= 'red'>E-mail inválido</font>"
            alert("E-mail inválido")
        }
}



