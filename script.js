// Petale — interactions

const searchToggle = document.getElementById('search-toggle');
const searchForm = document.getElementById('search-form');
const cartToggle = document.getElementById('cart-toggle');
const cartPanel = document.getElementById('cart-panel');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

function closeAll(except){
    if(except !== 'search') searchForm.classList.remove('active');
    if(except !== 'cart') cartPanel.classList.remove('active');
    if(except !== 'menu') navbar.classList.remove('active');
}

searchToggle.addEventListener('click', () => {
    const isActive = searchForm.classList.contains('active');
    closeAll();
    if(!isActive) searchForm.classList.add('active');
});

cartToggle.addEventListener('click', () => {
    const isActive = cartPanel.classList.contains('active');
    closeAll();
    if(!isActive) cartPanel.classList.add('active');
});

menuToggle.addEventListener('click', () => {
    const isActive = navbar.classList.contains('active');
    closeAll();
    if(!isActive) navbar.classList.add('active');
});

// remove an item from the cart panel
document.querySelectorAll('.cart-item .fa-times').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.cart-item').remove());
});

// close the cart on any click outside it, except the checkout button
document.addEventListener('click', (e) => {
    if(!cartPanel.classList.contains('active')) return;

    const checkoutBtn = cartPanel.querySelector('.btn');
    const clickedCheckout = checkoutBtn && checkoutBtn.contains(e.target);
    const clickedToggle = cartToggle.contains(e.target);

    if(!clickedCheckout && !clickedToggle){
        cartPanel.classList.remove('active');
    }
});

// close mobile menu after choosing a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('active'));
});