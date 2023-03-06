const form = document.getElementById('form-numeros')


let formEValido = false

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numA = document.getElementById('numero-a')
    const numB = document.getElementById('numero-b')
    const mensagemSucesso = `O Valor B ${numB.value} é maior que o valor A ${numA.value}.`

    formEValido = numB.value > numA.value
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    } else {
        document.querySelector('.error-message').style.display = 'block'
    }
})



