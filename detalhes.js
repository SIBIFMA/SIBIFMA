if (cargo.value == 1) {
    cargo.classList.remove('errorInput')
    if (email.value == 'admin') {
        email.classList.remove("errorInput")
        email.classList.add("sucessoInput")
        if (password.value == 'admin') {
            telaLogin.classList.add('animacao')
            setTimeout(function() {
                location.href="home.html"
            }, 1800)
        }
    } else {
        email.classList.remove("sucessoInput")
        password.classList.remove("sucessoInput")
        email.classList.add("errorInput")
        password.classList.add("errorInput")
    }
} else if (cargo.value == 2) {
    cargo.classList.remove('errorInput')
    if (email.value == 'advanced') {
        email.classList.remove("errorInput")
        email.classList.add("sucessoInput")
        } if (password.value == 'admin') {
            telaLogin.classList.add('animacao')
            setTimeout(function() {
                location.href="sib-advanced.html"
            }, 1800)
    } else {
        email.classList.remove("sucessoInput")
        password.classList.remove("sucessoInput")
        email.classList.add("errorInput")
        password.classList.add("errorInput")
    }
} else {
    email.classList.remove("sucessoInput")
    password.classList.remove("sucessoInput")
    email.classList.add("errorInput")
    password.classList.add("errorInput")
    cargo.classList.add("errorInput")
}