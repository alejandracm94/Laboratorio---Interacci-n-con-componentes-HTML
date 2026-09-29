// Punto 2: clic en "¡Burger Town!" -> console.log
document.querySelectorAll('.burger-town').forEach(function (titulo) {
  titulo.addEventListener('click', function () {
    console.log('¡Alguien hizo clic en BURGER TOWN!');
  });
});

// Punto 4: clic en "ARROZ" -> el titular de la foto se vuelve rojo
document.querySelectorAll('.arroz').forEach(function (arroz) {
  arroz.addEventListener('click', function () {
    document.getElementById('foto-titulo').style.color = 'red';
  });
});