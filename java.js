// Wait for the DOM to load

document.addEventListener('DOMContentLoaded', function() {
   
    // Toggle More Info on Home Page
    
    const toggleButton = document.getElementById('toggleButton');
    
    const moreInfo = document.getElementById('moreInfo');

    if (toggleButton) { // Check if the element exists on the current page
        
        toggleButton.addEventListener('click', function() {
            
            moreInfo.classList.toggle('hidden'); // Toggle the 'hidden' class
        });
    }

    // Form Validation on Contact Page
    const contactForm = document.getElementById('contactForm');

    const formResponse = document.getElementById('formResponse');

    if (contactForm) { // Check if the form exists on the current page
        
        contactForm.addEventListener('submit', function(e) {
            
            e.preventDefault(); // Prevent default form submission

            // Simple validation
            const name = document.getElementById('name').value.trim();
           
            const email = document.getElementById('email').value.trim();
            
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                
                formResponse.textContent = 'Please fill in all fields.';
                
                formResponse.style.color = 'red';
                
                return;
            }

            // Simple email format check
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                
                formResponse.textContent = 'Please enter a valid email address.';
                
                formResponse.style.color = 'red';
                
                return;
            }

            // If validation passes
           
            formResponse.textContent = 'Thank you for contacting us!';
            
            formResponse.style.color = 'green';

            // Reset the form
            
            contactForm.reset();
        });
    }
});
