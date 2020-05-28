function somar() {
    let r = document.getElementById('result')
    let n1 = Number(prompt('Digite o primeiro número'))
    let n2 = Number(prompt('Digite o segundo número'))

    let soma = n1 + n2
    r.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a ${soma}.</p>`
}