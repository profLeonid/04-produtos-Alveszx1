function adicionarProduto(){

    const produto = document.getElementById('produto')
    console.log(produto.value)
    const lista = document.getElementById('lista')
    const span = document.createElement('span')

    span.textContent = produto.value

    lista.appendChild(span)
    span.className = "bg-blue-300 px-8 py-2 rounded"
    
}