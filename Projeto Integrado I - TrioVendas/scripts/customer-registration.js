function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then( states => {

        for(const state of states){
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    
    const ufValue  = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json())
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)


//Função mostrar senha
let btn = document.querySelector('.eye2');
    btn.addEventListener('click', function() {
        let input = document.querySelector('#senha');
        if(input.getAttribute('type') == 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
});

let btn1 = document.querySelector('.eye');
    btn1.addEventListener('click', function() {
        let input = document.querySelector('#confirmeSenha');
        if(input.getAttribute('type') == 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
});

function validaCadastro(){
    var formulario = document.forms["create-registration"];

    var name = formulario.name.value;
    var email = formulario.email.value;
    var cpf = formulario.cpf.value;
    var telefone = formulario.telefone.value;
    var senha = formulario.senha.value;
    var confirmeSenha = formulario.confirmeSenha.value;

    const buttonSave = document.querySelector("#container main footer button")
    const modal = document.querySelector("#modal")


    var erro = false //Não tem erro
    if(name.indexOf(" ") == -1) {
        alert("Prencha o nome completo")
        erro = true //Quando identificar um erro
    }
    if(cpf.length != 11) {
        alert("CPF inválido! Preencha corretamente")
        erro = true
    }
    if(telefone.length != 12) {
        alert("Telefone inválido! Preencha corretamente")
        erro = true
    }
    if(senha.length < 6) {
        alert("Senha inválida! Sua senha deve possuir no mínimo 6 caracteres")
        erro = true
    }
    if(confirmeSenha!= senha){
    alert("As senhas não coincidem! Digite novamente")
        erro = true
    }

    if(erro) {
        buttonSave.addEventListener("click", () => {
            modal.classList.remove("hide")
            setTimeout(()=> {
                window.location = '/'
            }, 3000)
        })
        return false
    }
    else{
        return true   
    }
    
}
