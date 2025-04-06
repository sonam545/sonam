// Scroll to Top Button Logic
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Product Filter Logic
const priceRange = document.querySelector('input[type="range"]');
const categorySelect = document.querySelector('select');
const productItems = document.querySelectorAll('.product-item');

function filterProducts() {
    const maxPrice = priceRange ? parseFloat(priceRange.value) : Infinity;
    const selectedCategory = categorySelect ? categorySelect.value : 'All';

    productItems.forEach(item => {
        const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));
        const category = item.getAttribute('data-category');

        if ((selectedCategory === 'All' || selectedCategory === category) && price <= maxPrice) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

if (priceRange) priceRange.addEventListener('input', filterProducts);
if (categorySelect) categorySelect.addEventListener('change', filterProducts);

// Cart Management
const cart = [];
const cartContainer = document.querySelector('.cart-items');
const totalContainer = document.querySelector('.total p');

document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product-item');
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

        cart.push({ name: productName, price: productPrice });
        alert(`${productName} has been added to your cart!`);
        updateCart();
    });
});

function updateCart() {
    if (!cartContainer || !totalContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);

        total += item.price;
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon!');
    });
}

// Checkout Form Submission
const checkoutForm = document.querySelector('.checkout form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your order has been placed successfully!');
    });
}
