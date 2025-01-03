
let dropdown = document.querySelector('.dropDown-menu');

document.querySelector('.dropdown-item').onclick =() => {
    dropdown.classList.toggle('active');
}