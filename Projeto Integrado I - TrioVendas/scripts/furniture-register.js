
function validaCadastro(){
    var formulario = document.forms["create-registration"];

    var name = formulario.name.value;
    var serie = formulario.serie.value;
    var descricao = formulario.descricao.value;
    var quantidade = formulario.quantidade.value;
    var tipo = formulario.tipo.value;

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
    }else{
        return true   
    }
    
}
