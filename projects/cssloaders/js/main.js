const loader1 = document.querySelector('.loader1');
const loader2 = document.querySelector('.loader2');
const loader3 = document.querySelector('.loader3');
const loaders = [loader1, loader2, loader3];
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        for (var i = 0; i < 3; i++) {
            loaders[i].style.opacity = 0;
            loaders[i].style.display = 'none';
        };
        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init ();