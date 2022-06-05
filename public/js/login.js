function userLogin() {
  let emailUser = document.getElementById("email-user").value;
  let passUser = document.getElementById("pass-user").value;

  if (emailUser != "") {
    if (passUser != "") {
      self.location = "../home.html";
    } else {
      alert("E-mail e senha não conferem.");
    }
  } else {
    alert("Este e-mail nao está cadastrado, Crie uma conta.");
  }
}



var lastSlide = 2;
function slide() {
    console.log(lastSlide);
    let imageSlide = ["slide1", "slide2", "slide3"];
    
    document.getElementById(imageSlide[lastSlide]).classList.toggle('fade');
    
  if (lastSlide === 0) lastSlide++;
  else if (lastSlide === 1) lastSlide++;
  else if (lastSlide === 2) lastSlide = 0;
    
    document.getElementById(imageSlide[lastSlide]).classList.toggle('fade');

    setTimeout(function () {
        slide()
    }, 8000);
}

slide();

alert('Escreva um e-mail qualquer e uma senha e aperte para entrar');
