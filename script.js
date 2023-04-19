window.addEventListener('scroll', function() {
    var secao = document.getElementById('sobre_inclusao_animation');
    var secaoPos = secao.getBoundingClientRect().top;
    var janelaPos = window.innerHeight;
    var nav = document.getElementById('nav');

    if (secaoPos < janelaPos){
      secao.classList.add('animacao');
    }else{
        secao.classList.remove('animacao');
    }

});

//MENU DE TELA PEQUENA--------------------------------------------------------------------------
//menu nav
var nav = document.getElementById("nav");//div que tem todos os items e o botão e sair do menu
var showMenu = document.getElementById("showMenu");//id do botão de abrir menu
var hideMenu = document.getElementById("hideMenu");//id do botão de fechar menu 

showMenu.addEventListener("click", function () {
  nav.classList.add("show");
});//se clicar no botão de abrir menu, vai adicionar a classe "show" nele que já está estilizada no css

hideMenu.addEventListener("click", function () {
  nav.classList.remove("show");// se clachar em fechar vai remover esse classe
});

//setinha do tópico de mitos e estigmas 
const seta = document.querySelector('.seta');
const mitos_texto = document.querySelector('.mitos_texto');
var seta1 = document.getElementById('seta1')
var seta2 = document.getElementById('seta2')
var seta3 = document.getElementById('seta3')

var text1 = document.getElementById('text1')
var text2 = document.getElementById('text2')
var text3 = document.getElementById('text3')


seta1.addEventListener('click', function() {
  this.classList.toggle('girada');

  text1.classList.toggle('mitos_texto_mostrar');

});

seta2.addEventListener('click', function() {
  this.classList.toggle('girada');

  text2.classList.toggle('mitos_texto_mostrar');

});

seta3.addEventListener('click', function() {
  this.classList.toggle('girada');

  text3.classList.toggle('mitos_texto_mostrar');

});