'use strict'

import {produtos} from "./produtos.js" 

function criarCard(produtos) {
    const card = document.createElement('div')
    card.className = 'card'

    const imagem = document.createElement('img')
    imagem.src = `./img/${produtos.imagem}`
    imagem.alt = produtos.descricao

    const nomeProduto = document.createElement('h3')
    nomeProduto.textContent = produtos.nome

    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produtos.descricao
    descricaoProduto.className = "descricao"

    const categoraiProduto = document.createElement('span')
    categoraiProduto.textContent = produtos.categoria
    let categoriaFormat = formatarCategoria(produtos.categoria)    
    categoraiProduto.classList.add(categoriaFormat, 'categoria')
    
    
    const preco = document.createElement('span')
    preco.textContent = formatarNumero(produtos.preco)
    preco.className = 'preco'

    card.append(imagem, nomeProduto,descricaoProduto, categoraiProduto, preco)

    return card
}

function formatarNumero(numero){
    const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    }).format(numero)
    
    return formatter
}

function formatarCategoria(categoria){
    if (String(categoria).toLowerCase() == 'Eletrônicos'.toLowerCase()) {
        return 'corEletronicos'
    }else if(String(categoria).toLowerCase() == 'Informática'.toLowerCase())
        return 'corInformatica'
}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)
