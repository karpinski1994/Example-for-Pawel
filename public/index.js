import Worker from './scripts/Worker.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    console.log('Worker: ', (new Worker('pablo', 'z pubelo')).getName())
})