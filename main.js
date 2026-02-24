function adicionarProduto(){

    const produto = document.getElementById('produto')
    const codigo = document.getElementById("codigo")
    const qtd = document.getElementById("qtd")

    const lista = document.getElementById('lista')

    const spanProduto = document.createElement('span')
    const spanCodigo = document.createElement('span')
    const spanQtd = document.createElement('span')



    if(produto.value === "" || codigo.value === "" || qtd.value === ""){
        alert("Não é permitido entrada vazia")
    }else{
        const div = document.createElement('div')
        div.className = "flex gap-2 mb-2"

        spanCodigo.textContent = codigo.value
        div.appendChild(spanCodigo)
        spanCodigo.className = "bg-blue-300 px-8 py-2 rounded  text-center  "
        codigo.value = ""

        spanProduto.textContent = produto.value
        div.appendChild(spanProduto)
        spanProduto.className = "bg-blue-300 px-8 py-2 rounded text-center"
        produto.value = ""

        
        spanQtd.textContent = qtd.value
        div.appendChild(spanQtd)
        spanQtd.className = "bg-blue-300 px-8 py-2 rounded  text-center"
        qtd.value = ""

        lista.appendChild(div)
        
    }

    

    
}