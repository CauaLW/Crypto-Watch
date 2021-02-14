function searchPrice () {
    const base = document.querySelector('#crypto').value
    const target = document.querySelector('#currency').value
    const value = parseInt(document.querySelector('#value').value)

    const resultContainer = document.querySelector('#results')

    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://api.cryptonator.com/api/ticker/${base}-${target}`)

    xhr.addEventListener('load', () => {
        const resp = JSON.parse(xhr.responseText)
        
        const base = resp.ticker.base.toUpperCase()
        const price = resp.ticker.price
        const target = resp.ticker.target.toUpperCase()

        resultContainer.innerHTML = `${value} ${base} = ${(value * price).toFixed(4)} ${target}`
    })

    xhr.send()
}

document.querySelector('#btn-convert').addEventListener('click', searchPrice)