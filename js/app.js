// Scrolling with arrow buttons

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

// LightBox & image

const lightBox = document.createElement('div');
lightBox.id = 'lightbox';
const img = document.createElement('img');
const images = document.querySelectorAll('.grid-item');

// Left Button
const left_i = document.createElement('i');
left_i.className = 'fas fa-chevron-left';
const left_a = document.createElement('a');
const left_button = document.createElement('div');
left_button.className = 'btn';
left_a.appendChild(left_i);
left_button.appendChild(left_a);

// Right Button
const right_i = document.createElement('div');
right_i.className = 'fas fa-chevron-right';
const right_a = document.createElement('a');
const right_button = document.createElement('div');
right_button.className = 'btn';
right_a.appendChild(right_i);
right_button.appendChild(right_a);

// Add lightbox and add event listeners
document.body.appendChild(lightBox);

images.forEach(item => {
    item.addEventListener('click', e => {
        lightBox.classList.add('active');
        // let index = images.indexOf(item);
        // console.log(index);
        img.src = item.src;
        img.classList.add('lightbox-image');
        lightBox.appendChild(left_button);
        lightBox.appendChild(img);
        lightBox.appendChild(right_button);
    })
});

lightBox.addEventListener('click', e => {
    // console.log(e.target);
    if (e.target.id != 'lightbox' ) {
        return;
    }
    lightBox.classList.remove('active');
    const childrenArray = Array.from(lightBox.children);
    childrenArray.forEach(child => {
        child.remove();
    });
});