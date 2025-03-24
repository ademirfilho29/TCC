//AQUI EU VOU FAZER AS VALIDACOES DE CAMPO, OU SEJA SE O EMAIL ESTA NO FORMATO ADEQUADO//
//  OU SE A SEGUNDA SENHA É IGUAL A PRIMEIRA//

function EmailValidation(field) {
   //EMAILS NÃO PODEM CONTER ESPAÇOS, POSSUEM @, TEM QUE TER PELO MENOS UM PONT DEPOIS DO @
   user =  field.value.substring(0, field.value.indexOf ("@"));
   domain = field.value.substring(field.value.indexOf ("@") + 1, field.value.length);
    // continuar os if else 
    if ((user.length >= 1) && 
        (domain.length >= 3) &&
        (user.search("@") ==-1) &&
        (domain.search("@") ==-1) &&
        (user.search(" ") ==-1) &&
        (domain.search(" ") ==-1) &&
        (domain.search(".") !==-1) &&
        (domain.indexOf(".") >=1) &&
        (domain.indexOf(".") < domain.length -1)){
            document.getElementById("email").innerHTML="E-mail valido";
            alert("Email Valido")
        }
    else {
        document.getElementById("email").innerHTML="<font color= 'red'>E-mail inválido</font>"
        alert("E-mail inválido")
    }
}
function alerta(){
    alert ("Sua conta foi criada com sucesso!")
}

// TENTAR COLOCAR AQUELE TEXTO PRA FORA DA CAIXA PRETA

// FAZER A VERIFICAÇÃO DA SENHA, tanto de char quanto pra ver se a segunda esta igual a outra//
function PasswordValidation(field){
    password = field.value.PasswordValidation(0, field.value.PasswordValidation(20))

    if ((pass.length >= 1 )&&
        ()){}
}