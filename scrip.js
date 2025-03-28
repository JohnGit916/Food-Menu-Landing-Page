const menuData = {
    proteins: [
        { name: "Honey Garlic Salmon", image: "honey_garlic_salmon.jpg" },
        { name: "Ground Beef", image: "ground_beef.png" },
        { name: "Garlic Butter Steak Bites", image: "garlic_butter_steak.png" },
        { name: "Coconut Curry Mung Beans", image: "coconut_curry_mung_beans.jpg" },
        { name: "Baked Chicken", image: "baked_chicken.png" },
        { name: "Pan Fried Sea Bass", image: "pan_fried_sea_bass.png" }
    ],
    veggies: [
        { name: "Sauteed Spinach", image: "sauteed_spinach.jpg" },
        { name: "Sweet Potatoes", image: "sweet_potatoes.jpg" },
        { name: "String Beans", image: "string_beans.jpg" },
        { name: "Broccoli", image: "broccoli.jpg" },
        { name: "Boiled Corn", image: "boiled_corn.jpg" },
        { name: "Zucchini", image: "zucchini.jpg" }
    ],
    sides: [
        { name: "White Rice", image: "white_rice.jpg" },
        { name: "Butter Pasta", image: "butter_pasta.jpg" },
        { name: "Quinoa", image: "quinoa.jpg" },
        { name: "Mashed Potatoes", image: "mashed_potatoes.jpg" },
        { name: "Veggie Rice", image: "veggie_rice.jpg" },
        { name: "Yellow Curry Rice", image: "yellow_curry_rice.png" }
    ]
};

function showMenu(category) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    menuData[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
        `;
        menuGrid.appendChild(card);
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleCart() {
    const cartDropdown = document.getElementById('cart-section');
    cartDropdown.classList.toggle('show');
}


    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

    // Mobile-specific dropdown toggle
    document.addEventListener("DOMContentLoaded", function () {
        const dropdownToggle = document.querySelector(".dropdown-toggle");
    
        if (dropdownToggle) {
            dropdownToggle.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default link behavior
                const dropdown = this.parentElement;
    
                // Toggle 'active' class for mobile dropdown visibility
                dropdown.classList.toggle("active");
            });
        }
    });
    





    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            let price = parseFloat(button.getAttribute('data-price'));
    
            // Assign price 0 if the item is from veggies or sides
            if (['Sauteed Spinach', 'Sweet Potatoes', 'String Beans', 'Broccoli', 
                'Boiled Corn', 'Zucchini', 'White Rice', 'Butter Pasta', 
                'Quinoa', 'Mashed Potatoes', 'Veggie Rice', 'Yellow Curry Rice']
                .includes(name)) {
                price = 0;
            }
    
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        });
    });
    





const cart = [];

    

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const totalPrice = document.getElementById('total-price');
        const cartCount = document.getElementById('cart-count');

        cartItems.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);

            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        totalPrice.textContent = `KSh ${total.toFixed(2)}`;
        cartCount.textContent = itemCount;
    }

    function toggleCart() {
        const cartSection = document.getElementById('cart-section');
        cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
    
        let orderDetails = "Hello John...\nI would like to place an order:\n";
        cart.forEach(item => {
            orderDetails += `${item.name} x${item.quantity} - KSh ${(item.price * item.quantity).toFixed(2)}\n`;
        });
        orderDetails += `Total: KSh ${document.getElementById('total-price').textContent}`;
    
        const encodedMessage = encodeURIComponent(orderDetails);
        const whatsappLink = `https://wa.me/254113815382?text=${encodedMessage}`;
    
        window.open(whatsappLink, '_blank');
    }
    

    