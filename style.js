document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginCard = document.getElementById('loginCard');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulating authentication logic
            if (username === 'c2e' && password === 'c2e') {
                showPopup('Login successful!');
                setTimeout(function() {
                    window.location.href = 'password.html';
                }, 2000);
            } else {
                showPopup('Invalid username or password');
            }
        });
    }

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(function() {
            document.body.removeChild(popup);
        }, 2000);
    }
});
