// script.js

// Donation Tally Counter
let tally = 0;
function incrementTally() {
    tally++;
    document.getElementById('tally').textContent = tally;
}

// Event Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2026-03-01T00:00:00'); // Placeholder date
    const now = new Date();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').textContent = 'Event has started!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle Get Involved form submission
document.addEventListener('DOMContentLoaded', function() {
    const involveForm = document.getElementById('involveForm');
    const confirmationMsg = document.getElementById('confirmationMsg');
    const involveSection = document.getElementById('involve');
    if (involveForm) {
        involveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Prepare form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const purpose = document.getElementById('purpose').value;
            const message = document.getElementById('message').value;

            // Send email using EmailJS
            emailjs.send('service_c1wla04', 'template_fuldfji', {
                to_email: 'h228team1ca2@gmail.com',
                from_name: name,
                from_email: email,
                phone: phone,
                purpose: purpose,
                message: message
            })
            .then(function(response) {
                confirmationMsg.textContent = 'Message has been sent to h228team1ca2@gmail.com. Please wait for a few days for a response.';
                confirmationMsg.style.display = 'block';
                involveSection.style.display = 'none';
            }, function(error) {
                confirmationMsg.textContent = 'Failed to send message. Please try again later.';
                confirmationMsg.style.display = 'block';
            });
        });
    }
});