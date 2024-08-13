document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to order section when "Order Now" is clicked
    document.querySelector('.hero-btn').addEventListener('click', () => {
        document.querySelector('.order-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Alert for order buttons
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your order! We are processing it.');
        });
    });

    // Modal functionality for promotion buttons
    const promotions = document.querySelectorAll('.promotion button');
    promotions.forEach((button, index) => {
        // Balloon Burst Game Button
        if (index === 3) {
            button.addEventListener('click', () => {
                window.location.href = 'https://www.miniplay.com/game/balloon-pop-online';
            });
        } else {
            button.addEventListener('click', () => {
                openModal(index);
            });
        }
    });

    // Function to open modal
    function openModal(index) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h3>${promotions[index].previousElementSibling.previousElementSibling.textContent}</h3>
                <p>${promotions[index].previousElementSibling.textContent}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal when 'X' is clicked
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Smooth scrolling for footer buttons (if any)
    document.querySelectorAll('footer nav button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // New functionality: Modal pop-up for "$0 Delivery Fee Order Now" button
    const deliveryOrderBtn = document.getElementById('deliveryOrderBtn');
    const deliveryModal = document.createElement('div');
    deliveryModal.classList.add('modal');
    deliveryModal.setAttribute('id', 'deliveryModal');
    deliveryModal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>Terms and Conditions</h3>
            <img src="https://via.placeholder.com/400x200" alt="Delivery Image" style="width: 100%; margin-bottom: 20px;">
            <p>Enjoy $0 delivery fee on your first order. Terms and conditions apply. Offer valid for a limited time only.</p>
        </div>
    `;
    document.body.appendChild(deliveryModal);

    deliveryOrderBtn.addEventListener('click', () => {
        deliveryModal.style.display = 'block';
    });

    // Close the modal when the close button (x) is clicked
    deliveryModal.querySelector('.close-btn').addEventListener('click', () => {
        deliveryModal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === deliveryModal) {
            deliveryModal.style.display = 'none';
        }
    });
});
