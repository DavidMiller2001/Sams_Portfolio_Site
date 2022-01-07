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

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('click', toggleFocus);
});

function toggleFocus(e) {
    e.target.classList.toggle('in-focus');

    const zoomIn = document.createElement('div');
    zoomIn.className = 'zoom';
    const closeButton = document.createElement('div');
    closeButton.className = 'close-btn btn';
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fas fa-times';
    closeButton.appendChild(closeIcon);
    zoomIn.appendChild(closeButton);
    document.body.appendChild(zoomIn);
}

function zoomOut() {

}