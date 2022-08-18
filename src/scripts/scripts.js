let precoPrincipal = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let precoTotal = 0;

let nomePrincipal;
let nomeBebida;
let nomeSobremesa;
let endereco;
let nome;


function selecionarPrato(elemento) {
    nomePrincipal = elemento.querySelector("h3").innerHTML;
    precoPrincipal = elemento.querySelector("p").innerHTML;

    let opcaoClicada = document.querySelector(".cardapio-principal .ativo");
    if(opcaoClicada !== null) {
        opcaoClicada.classList.remove("ativo")

    }
    elemento.classList.add("ativo")

    botaoPedir()
}

function selecionarBebida(elemento) {
    nomeBebida = elemento.querySelector("h3").innerHTML;
    precoBebida = elemento.querySelector("p").innerHTML;

    let opcaoClicada = document.querySelector(".cardapio-bebida .ativo");
    if(opcaoClicada !== null) {
        opcaoClicada.classList.remove("ativo")
    }
    elemento.classList.add("ativo")

    botaoPedir()
}

function selecionarSobremesa(elemento) {
    nomeSobremesa = elemento.querySelector("h3").innerHTML;
    precoSobremesa = elemento.querySelector("p").innerHTML;

    let opcaoClicada = document.querySelector(".cardapio-sobremesa .ativo");
    if(opcaoClicada !== null) {
        opcaoClicada.classList.remove("ativo")
    }
    elemento.classList.add("ativo")

    botaoPedir()
}

function caculoTotal() {
    precoPrincipal = precoPrincipal.toString().replace(",", ".");
    precoBebida = precoBebida.toString().replace(",", ".");
    precoSobremesa = precoSobremesa.toString().replace(",", ".");

    precoPrincipal = Number(precoPrincipal);
    precoBebida = Number(precoBebida);
    precoSobremesa = Number(precoSobremesa);

    precoTotal = (precoPrincipal + precoBebida + precoSobremesa).toFixed(2);

    precoTotal = precoTotal.toString().replace(".", ",");
    precoPrincipal = precoPrincipal.toString().replace(".", ",");
    precoBebida = precoBebida.toString().replace(".", ",");
    precoSobremesa = precoSobremesa.toString().replace(".", ",");
}

function addNomeEPreco(){

    let elemento = document.querySelector(".prato-principal h6");
    elemento.innerHTML = nomePrincipal;
    elemento = document.querySelector(".prato-principal p");
    elemento.innerHTML = `R$ ${precoPrincipal}`;
    
    elemento = document.querySelector(".bebida h6");
    elemento.innerHTML = nomeBebida;
    elemento = document.querySelector(".bebida p");
    elemento.innerHTML = `R$ ${precoBebida}`;
    
    elemento = document.querySelector(".sobremesa h6");
    elemento.innerHTML = nomeSobremesa;
    elemento = document.querySelector(".sobremesa p");
    elemento.innerHTML = `R$ ${precoSobremesa}`;

    caculoTotal();

    elemento = document.querySelector(".total p");
    elemento.innerHTML = `R$ ${precoTotal} `;


}

function botaoPedir() {
    if(nomePrincipal && nomeBebida && nomeSobremesa) {
        let botaoRemover = document.querySelector(".botao");
        botaoRemover.classList.add("desativado")

        let botaoAtivar = document.querySelector(".botao-pedir");
        botaoAtivar.classList.remove("desativado");
    }
}

function pedirEnderecoEConfirmar(elemento){
    nome = prompt("Qual o seu nome?");
    endereco = prompt("Qual seu endereço?");

    let confirmar = document.querySelector(".confirmar-pedido");
    confirmar.classList.remove("desativado");
    
}

function fazerPedido() {
    precoTotal = precoTotal.toString().replace(",", ".");
    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrincipal}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
Total: R$ ${precoTotal}
    
Nome: ${nome}
Endereço: ${endereco}`
    mensagem = encodeURI(mensagem)
    let link = `https://wa.me/+5599999999999?text=${mensagem}`

    window.open(link);
}

function cancelar(){
    let botaoCancelar = document.querySelector(".confirmar-pedido");
    botaoCancelar.classList.add("desativado")
}
