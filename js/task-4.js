const formElement = document.querySelector(".login-form");


formElement.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(formElement)
    const email = formElement.elements.email.value
    const password = formElement.elements.password.value

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(data)
    formElement.reset();
})

