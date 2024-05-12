document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        const phoneNumber = form.querySelector('input[name="phone"]').value;
        const email = form.querySelector('input[name="email"]').value;

        const phoneValidation = /^\+380\d{9}$/;
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let errors = [];

        if (!name.trim()) {
            errors.push("Name field is required");
        }

        if (message.length < 5) {
            errors.push("Message field must be at least 5 characters long");
        }

        if (!phoneValidation.test(phoneNumber)) {
            errors.push("Phone number must start with +380");
        }

        if (!emailValidation.test(email)) {
            errors.push("Email must be valid");
        }

        if (errors.length > 0) {
            const errorList = document.getElementById('errorList');
            errorList.innerHTML = '';

            errors.forEach(error => {
                const li = document.createElement('li');
                li.textContent = error;
                errorList.appendChild(li);
            });
        } else {
            alert ("Form submitted successfully!");
            form.reset();

            console.log("Name:", name);
            console.log("Message:", message);
            console.log("Phone number:", phoneNumber);
            console.log("Email:", email);
        }
    });
});