function show_dropdown(number, value){
    const elements = document.querySelectorAll('.dropdown-content');
    const options = document.querySelectorAll('.option');
    const total = document.getElementsByClassName('total')[0];
    total.innerHTML = `Total: $${value}.00 USD`;
    options.forEach((option) => option.classList.remove('active'));
    elements.forEach((ele) => ele.style.display = 'none');
    const box = document.getElementById('option' + number);
    const dropdown = document.getElementById('dropdown' + number);
    box.classList.add('active');
    dropdown.style.display = 'block';
}
function add_to_cart(e){
    alert('Added to cart');
}