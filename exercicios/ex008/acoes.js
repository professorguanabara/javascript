function calcular() {
    let res = document.getElementById('resultado')
    let num = Number(window.prompt('Digite um número'))

    res.innerHTML = `<h2>Analisando o número ${num}</h2>`

    res.innerHTML += `<p>O valor absoluto de ${num} é <mark>${Math.abs(num)}</mark></p>`
    res.innerHTML += `<p>A sua parte inteira é <mark>${Math.trunc(num)}</mark></p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é <mark>${Math.round(num)}</mark></p>`
    res.innerHTML += `<p>A sua raiz quadrada é <mark>${Math.sqrt(num).toFixed(2)}</mark></p>`
    res.innerHTML += `<p>A sua raiz cúbica é <mark>${Math.cbrt(num).toFixed(2)}</mark></p>`
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é <mark>${Math.pow(num, 2)}</mark></p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é <mark>${Math.pow(num, 3)}</mark></p>`

}