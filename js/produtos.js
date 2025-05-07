// Array completo de produtos
const produtos = [
    {
        id: 1,
        nome: "Whisky Jack Daniel's tradicional",
        descricao: "Blended Scotch Whisky de luxo com sabores complexos e textura aveludada. Perfeito para ocasiões especiais.",
        preco: 1899.90,
        imagem: "assets/img/Jack Daniel's.jpg",
        categoria: "whisky",
        destaque: true
    },
    {
        id: 2,
        nome: "Whisky Jack Daniel's honey",
        descricao: "Um dos charutos mais cobiçados do mundo, feito à mão em Cuba com folhas de tabaco selecionadas.",
        preco: 599.90,
        imagem: "assets/img/Jack Daniel's honey.jpg",
        categoria: "whisky",
        destaque: true
    },
    {
        id: 3,
        nome: "Whisky Jack Daniel's fire",
        descricao: "Um dos vinhos mais prestigiados de Bordeaux, safra excepcional com aromas de frutas escuras e especiarias.",
        preco: 4999.90,
        imagem: "assets/img/Jack Daniel's fire.jpg",
        categoria: "whisky",
        destaque: true
    },
    {
        id: 4,
        nome: "Whisky Jack Daniel's Apple",
        descricao: "O ápice da arte do conhaque, envelhecido por décadas em barris de carvalho, com notas de frutas cristalizadas e baunilha.",
        preco: 12999.90,
        imagem: "assets/img/Jack Daniel's Apple.jpg",
        categoria: "whisky",
        destaque: true
    },
    {
        id: 5,
        nome: "Whisky Gentleman jack",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Gentleman jack.jpg",
        categoria: "whisky",
        destaque: false
    },
    {
        id: 6,
        nome: "Red Label",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Red Label.jpg",
        categoria: "label",
        destaque: false
    },
    {
        id: 7,
        nome: "Green Label",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Green Label.jpg",
        categoria: "label",
        destaque: false
    },
    {
        id: 8,
        nome: "Gold Label",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/gold label.jpg",
        categoria: "label",
        destaque: false
    },
    {
        id: 9,
        nome: "Double Black",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Double Black.jpg",
        categoria: "label",
        destaque: false
    }, {
        id: 10,
        nome: "Black Label",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Black Label.jpg",
        categoria: "label",
        destaque: false
    },
    {
        id: 11,
        nome: "Blue Label",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Blue Label.jpg",
        categoria: "label",
        destaque: false
    },
    {
        id: 12,
        nome: "Buchanans deluxe",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Buchanan.jpg",
        categoria: "#",
        destaque: false
    },
    {
        id: 13,
        nome: "Chivas Regal 12 anos",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Chivas Regal.jpg",
        categoria: "#",
        destaque: false
    },
    {
        id: 14,
        nome: "Old Parr",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Old Parr.jpg",
        categoria: "#",
        destaque: false
    },
    {
        id: 15,
        nome: "Macallan 12 anos",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/The Macallan 12.jpg",
        categoria: "A",
        destaque: false
    },
    {
        id: 16,
        nome: "Royal salut",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Royal Salute 21.jpg",
        categoria: "A",
        destaque: false
    },
    {
        id: 17,
        nome: "Grant's triple wood",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Grant's Triple Wood whisky.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 18,
        nome: "Ballantine's finest",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Ballantine Finest.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 19,
        nome: "The famous grouse",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/The Famous Grouse.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 20,
        nome: "Sir Edwards finest",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Sir Edward.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 21,
        nome: "Label 5",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Label 5.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 22,
        nome: "J&B Rare",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/J&B Rare.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 23,
        nome: "Cutty sark",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Cutty Sark.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 24,
        nome: "Bullet bourbon frontier whiskey",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Bulleit Bourbon.jpg",
        categoria: "B",
        destaque: false
    },
    {
        id: 25,
        nome: "Woodford reserve bourbon",
        descricao: "Single malt escocês envelhecido por 18 anos em barris de carvalho, com notas de chocolate e frutas secas.",
        preco: 2999.90,
        imagem: "assets/img/Woodford Reserve.jpg",
        categoria: "B",
        destaque: false
    },
];

// Elementos do DOM
const produtosContainer = document.getElementById('produtos-container');
const categoriaSelect = document.getElementById('categoria');
const precoSelect = document.getElementById('preco');
const ordenarSelect = document.getElementById('ordenar');
const cartCount = document.getElementById('cart-count');

// Carregar produtos
function carregarProdutos() {
    // Limpar container
    produtosContainer.innerHTML = '';
    
    // Obter valores dos filtros
    const categoria = categoriaSelect.value;
    const preco = precoSelect.value;
    const ordenar = ordenarSelect.value;
    
    // Filtrar produtos
    let produtosFiltrados = produtos.filter(produto => {
        // Filtro por categoria
        if (categoria !== 'todos' && produto.categoria !== categoria) {
            return false;
        }
        
        // Filtro por preço
        switch(preco) {
            case '0-500':
                return produto.preco <= 500;
            case '500-1000':
                return produto.preco > 500 && produto.preco <= 1000;
            case '1000-5000':
                return produto.preco > 1000 && produto.preco <= 5000;
            case '5000+':
                return produto.preco > 5000;
            default:
                return true;
        }
    });
    
    // Ordenar produtos
    switch(ordenar) {
        case 'preco-asc':
            produtosFiltrados.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-desc':
            produtosFiltrados.sort((a, b) => b.preco - a.preco);
            break;
        case 'nome-asc':
            produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        default:
            // Ordem padrão (destaque primeiro)
            produtosFiltrados.sort((a, b) => b.destaque - a.destaque);
    }
    
    // Exibir produtos
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
            <div class="produto-item">
                <div class="produto-imagem">
                    <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='../assets/img/placeholder.jpg'">
                    ${produto.destaque ? '<span class="produto-tag">Destaque</span>' : ''}
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="produto-descricao">${produto.descricao}</p>
                    <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                    <button class="btn-comprar" data-id="${produto.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        produtosContainer.innerHTML += produtoHTML;
    });
    

}





// Menu Mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Event listeners para filtros
categoriaSelect.addEventListener('change', carregarProdutos);
precoSelect.addEventListener('change', carregarProdutos);
ordenarSelect.addEventListener('change', carregarProdutos);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
});

// Sistema de Carrinho (adicionar estas funções ao seu código)

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(event) {
    const produtoId = parseInt(event.target.dataset.id);
    const produto = produtos.find(p => p.id === produtoId);

    if (!produto) return;

    // Obter carrinho atual do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verificar se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === produtoId);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        // Adicionar novo item ao carrinho
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }

    // Salvar no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualizar contador do carrinho
    atualizarContadorCarrinho();
    
    // Feedback visual
    event.target.textContent = '✔ Adicionado';
    event.target.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        event.target.textContent = 'Adicionar ao Carrinho';
        event.target.style.backgroundColor = '';
    }, 2000);
}

// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    
    // Atualizar no DOM
    if (cartCount) {
        cartCount.textContent = totalItens;
    }
}

// Função para carregar os produtos (modifique sua função existente)
function carregarProdutos() {
    // Limpar container
    produtosContainer.innerHTML = '';
    
    // Obter valores dos filtros
    const categoria = categoriaSelect.value;
    const preco = precoSelect.value;
    const ordenar = ordenarSelect.value;
    
    // Filtrar produtos
    let produtosFiltrados = produtos.filter(produto => {
        // Filtro por categoria
        if (categoria !== 'todos' && produto.categoria !== categoria) {
            return false;
        }
        
        // Filtro por preço
        switch(preco) {
            case '0-500':
                return produto.preco <= 500;
            case '500-1000':
                return produto.preco > 500 && produto.preco <= 1000;
            case '1000-5000':
                return produto.preco > 1000 && produto.preco <= 5000;
            case '5000+':
                return produto.preco > 5000;
            default:
                return true;
        }
    });
    
    // Ordenar produtos
    switch(ordenar) {
        case 'preco-asc':
            produtosFiltrados.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-desc':
            produtosFiltrados.sort((a, b) => b.preco - a.preco);
            break;
        case 'nome-asc':
            produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        default:
            // Ordem padrão (destaque primeiro)
            produtosFiltrados.sort((a, b) => b.destaque - a.destaque);
    }
    
    // Exibir produtos
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
            <div class="produto-item">
                <div class="produto-imagem">
                    <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='../assets/img/placeholder.jpg'">
                    ${produto.destaque ? '<span class="produto-tag">Destaque</span>' : ''}
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="produto-descricao">${produto.descricao}</p>
                    <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                    <button class="btn-comprar" data-id="${produto.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        produtosContainer.innerHTML += produtoHTML;
    });
    
    // Adicionar eventos aos botões de compra
    document.querySelectorAll('.btn-comprar').forEach(btn => {
        btn.addEventListener('click', adicionarAoCarrinho);
    });
}

// Função para limpar o carrinho
function limparCarrinho() {
    localStorage.removeItem('carrinho');
    atualizarContadorCarrinho();
}

// Função para obter todos os itens do carrinho
function obterItensCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

// Função para calcular o total do carrinho
function calcularTotalCarrinho() {
    const carrinho = obterItensCarrinho();
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Função para remover item do carrinho
function removerItemCarrinho(produtoId) {
    let carrinho = obterItensCarrinho();
    carrinho = carrinho.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

// Função para atualizar quantidade de um item
function atualizarQuantidadeItem(produtoId, novaQuantidade) {
    if (novaQuantidade < 1) {
        removerItemCarrinho(produtoId);
        return;
    }

    let carrinho = obterItensCarrinho();
    const item = carrinho.find(item => item.id === produtoId);
    
    if (item) {
        item.quantidade = novaQuantidade;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();
    }
}

// Inicializar carrinho quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    atualizarContadorCarrinho();
    
    // Verificar se há carrinho no localStorage, se não, criar vazio
    if (!localStorage.getItem('carrinho')) {
        localStorage.setItem('carrinho', JSON.stringify([]));
    }
});