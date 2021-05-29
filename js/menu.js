function toogleMenu(){
  var menu = document.getElementById('menu');
  console.log(menu)

  if(menu.classList.contains("fechar")){
    menu.classList.remove("fechar")
  }
  else{
    menu.classList.add("fechar")
  }
}