const leftButtons = document.querySelectorAll('.left-btn');
const rightButtons = document.querySelectorAll('.right-btn');
const numberOfGrids = document.querySelectorAll('.grid-container').length;
let x;

leftButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const width = document.querySelector('.grid-container').scrollWidth;
        if (button.id == 'first') {
            window.scrollTo(numberOfGrids * width, 0);
        } else
        window.scrollTo(window.scrollX - width, 0);
    });
});
rightButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const width = document.querySelector('.grid-container').scrollWidth;
        if (button.id == 'last') {
            window.scrollTo(0, 0);
        } else
        window.scrollTo(window.scrollX + width, 0);
    });
});

