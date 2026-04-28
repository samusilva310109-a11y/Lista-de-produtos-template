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

    const categoraiProduto = document.createElement('span')
    categoraiProduto.textContent = produtos.categoria
    
    
    const preco = document.createElement('span')
    preco.textContent = formatarNumero(produtos.preco)

    card.append(imagem, nomeProduto, categoraiProduto, preco)

    return card
}

function formatarNumero(numero){
    

    const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    }).format(numero)

    

    return formatter
}

const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)
