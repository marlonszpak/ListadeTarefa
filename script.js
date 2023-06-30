const escreverTarefa = document.querySelector(".escrever-tarefa")
const botaoAdc = document.querySelector(".btn-adicionar")
const divResultado = document.querySelector(".resultado")

const validarInput = () => escreverTarefa.value.trim().lenght < 0


const adcTarefa = () => {
    const inputValido = validarInput()

    if(!inputValido){
        escreverTarefa.classList.add("erro")
    }

    const divTarefa = document.createElement("div")
    divTarefa.classList.add("tarefa")

    const textoTarefa = document.createElement("p")
    textoTarefa.innerText = escreverTarefa.value

    const divBotoes = document.createElement("div")
    divBotoes.classList.add("btns")

    const botaoTarefaConcluida = document.createElement("i")
    botaoTarefaConcluida.classList.add("bx") 
    botaoTarefaConcluida.classList.add("bx-check")

    botaoTarefaConcluida.addEventListener("click", () => {
        divTarefa.classList.toggle("concluida")
    })

    const botaoDeletarTarefa = document.createElement("i")
    botaoDeletarTarefa.classList.add("bx")
    botaoDeletarTarefa.classList.add("bxs-trash-alt")

    botaoDeletarTarefa.addEventListener("click", () => {
        divResultado.removeChild(divTarefa)
    })

    divTarefa.appendChild(textoTarefa)
    divTarefa.appendChild(divBotoes)
    divBotoes.appendChild(botaoTarefaConcluida)
    divBotoes.appendChild(botaoDeletarTarefa)

    divResultado.appendChild(divTarefa)

    escreverTarefa.value = ""

}

const checarInput = () => {
    const inputValido = validarInput()

    if (inputValido){
        return escreverTarefa.classList.remove("erro")
    }
}

botaoAdc.addEventListener("click", () => adcTarefa())

escreverTarefa.addEventListener("change", () => checarInput())
