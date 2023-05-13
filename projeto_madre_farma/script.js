const botao_abrir_menu = document.getElementById("header_extra")
const fundo_geral = document.querySelector("#fundo_geral_menu")

const botao_abrir_carrinho = document.getElementById("header_carrinho")
const fundo_carrinho = document.querySelector("#fundo_geral_carrinho")


botao_abrir_menu.addEventListener("click", function(){
    if(fundo_geral.style.display == "none"){
        fundo_geral.style.display = "flex"
        fundo_carrinho.style.display = "none"
    }else if(fundo_geral.style.display = "flex"){
        fundo_geral.style.display = "none"
    }
})

botao_abrir_carrinho.addEventListener("click", function(){
    if(fundo_carrinho.style.display == "none"){
        fundo_carrinho.style.display = "flex"
        fundo_geral.style.display = "none"
    }else if(fundo_carrinho.style.display = "flex"){
        fundo_carrinho.style.display = "none"
        
    }
})