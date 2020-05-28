function media() {
    let out = document.querySelector('section#out')
    let nome = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}`))
    let media = (nota1 + nota2) / 2

    out.innerHTML += `<p>O aluno <mark>${nome}</mark> tem as notas ${nota1.toFixed(1)} e ${nota2.toFixed(1)}. Sua média na matéria é <strong>${media.toFixed(1)}</strong>.</p>`
}