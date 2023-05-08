const form = document.getElementById('form-numeros')
const numA = document.getElementById('numero-a')
const numB = document.getElementById('numero-b')

let formEValido = false

form.addEventListener('submit', function(e){
    e.preventDefault()

    document.querySelector('.error-message').style.display = 'none' // esconde mensagem de erro anterior

    const mensagemSucesso = `O Valor B ${numB.value} é maior que o valor A ${numA.value}.`
    const mensagemErro = `O Valor B ${numB.value} é menor que o valor A ${numA.value}.`

    formEValido = parseInt(numB.value) > parseInt(numA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    } else {
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
    }
})

numA.addEventListener('input', function (e) {
    formEValido = parseInt(numB.value) > parseInt(numA.value)

    if (!formEValido) {
        numA.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    } else {
        numA.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})