/*Programacion de JavaScript*/

var notas = $('.sonidos');

$('.note').click(function(){
    let num = parseInt(this.id);
    notas[num].play();
});