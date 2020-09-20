$(document).ready(() => {
    document.getElementById('burgerMenu').addEventListener('click', toggleMenu)

    $(".phone_with_ddd").mask('(00) 0 0000-0000')

    $("#send").click(sendData)
})

function toggleMenu() {
    const navigatorMenu = document.getElementById('navigatorMenu')
    if (!navigatorMenu.classList.contains('is-active')) {
        navigatorMenu.classList.add('is-active')
    }else {
        navigatorMenu.classList.remove('is-active')
    }
}

function sendData() {
    let message = validForm();
    if(message) {
        Swal.fire({
            title: 'Não foi possível enviar suas informações',
            text: message,
            icon: 'error'
        })
    }else {
        const nome = $("#nome").val()
        const email = $("#email").val()
        const whatsapp = $("#whatsapp").val()
        writePessoasData(nome, email, whatsapp)
    }
}

function validForm() {
    let message = null
    
    const nome = $("#nome").val()
    const email = $("#email").val()
    const whatsapp = $("#whatsapp").val()
    let data = [
        {
            label: "Whatsapp",
            value: whatsapp,
            required: false
        },
        {
            label: "Email",
            value: email,
            required: true,
            valid: function() {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(String(this.value).toLowerCase())) {
                    message = `O ${this.label} está inválido`
                }
            }
        },
        {
            label: "Nome",
            value: nome,
            required: true
        }
    ]

    data.forEach((object) => {
        if(!object.value && object.required) {
            message = `O ${object.label} é obrigatório`
        }else if(object.valid && typeof object.valid === 'function') {
            object.valid();
        }
    })



    return message
}

function writePessoasData(nome, email, whatsapp) {
    const loading = showLoading('Enviando dados')
    db.collection("pessoas").add({
        nome,
        email,
        whatsapp
    })
    .then(function(docRef) {
        Swal.fire({
            title: 'Dados Enviados',
            message: 'Dados enviados com sucesso!',
            icon: 'success'
        })
        clearForm();
    })
    .catch(function(error) {
        Swal.fire({
            title: 'Erro',
            message: 'Não foi possivel enviar seus dados, tente novamente.',
            icon: 'error'
        })
    })
    .finally(function() {
        loading.close();
    })
}

function clearForm() {
    $("#nome").val('')
    $("#email").val('')
    $("#whatsapp").val('')
}

function showLoading(message) {
    const loading = Swal.fire({
        title: `${message}...`,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        onOpen: ()=>{
            Swal.showLoading();
        }
    })
    return loading
}