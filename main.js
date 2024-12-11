var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Ing. en Sistemas Computacionales')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Innovando el presente, construyendo el futuro con imaginacion!')
    .pauseFor(2500)
    // número de Caracteres que se borrarán
    .deleteChars(12)
    .typeString('<strong>código!</strong>')
    .pauseFor(2500)
    .start();