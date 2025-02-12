// Add any JavaScript functionality here 

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sample products data
    const products = [
        {
            id: 1,
            name: "Custom Phone Case",
            description: "Personalized phone case with your design",
            image: "images/phone-case.jpg",
            ebayLink: "https://ebay.com/your-product-link-1"
        },
        {
            id: 2,
            name: "3D Printed Vase",
            description: "Modern geometric vase design",
            image: "images/vase.jpg",
            ebayLink: "https://ebay.com/your-product-link-2"
        },
        {
            id: 3,
            name: "Desk Organizer",
            description: "Customizable desk organization solution",
            image: "images/organizer.jpg",
            ebayLink: "https://ebay.com/your-product-link-3"
        }
    ];

    // Load products if on products page
    const productsContainer = document.getElementById('productsContainer');
    if (productsContainer) {
        loadProducts();
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }
});

// Function to load products
function loadProducts() {
    const productsContainer = document.getElementById('productsContainer');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="${product.ebayLink}" class="product-link" target="_blank">View on eBay</a>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Function to handle contact form submission
function handleContactSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
} 