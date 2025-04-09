const form = document.getElementById('form-ctt')
const intNome = document.querySelector('input#int-nome')
const intTel = document.querySelector('input#int-telefone')
const telefones = []
const nomes = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    totalContatos()
})

function adicionaLinha() {

    if (telefones.includes(intTel.value) || nomes.includes(intNome.value)) {
        alert('Contato já existente')
    } else {
        telefones.push(intTel.value)
        nomes.push(intNome.value)

        let linha = '<tr>'
        linha += `<td>${intNome.value}</td>`
        linha += `<td>${intTel.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    intNome.value = ''
    intTel.value = ''
}

function atualizaTabela() {
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
}

function totalContatos() {
    document.getElementById('total').innerHTML = telefones.length
}