const hour = new Date().getHours();
const text = document.getElementById('wave');
const shareButton = getElementById('share');
let wave;

const choosingWave = () => {
    if( hour >= 0 && hour < 13) {
        wave = '¡Hola, buen día! Soy';
    } else if (hour >= 13 && hour < 19) {
        wave =  '¡Hola, excelente tarde! Soy ';
    } else if (hour >= 19 && hour <= 23) {
        wave = '¡Hola, buenas noches! Soy';
    } else wave = '¡Hola a todos! Soy';

    text.innerHTML = wave;
}
choosingWave();

shareButton.addEventLister('click', () => {
    navigator.share({
        title: 'Efraín Hernandez',
        text: 'Conoce sobre mi',
        url: 'https://efrainhgmx.com'
    })
    .then(() => console.log('Todo ok'))
    .catch(() => console.log('Error al compartir'));
});