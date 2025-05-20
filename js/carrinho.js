// Funções específicas para a página do carrinho

// Elementos do DOM
const itensCarrinho = document.getElementById('itens-carrinho');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const finalizarCompraBtn = document.getElementById('finalizar-compra');

// Função para calcular o total do carrinho
function calcularTotalCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Função para renderizar os itens do carrinho
function renderizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
                <a href="produtos.html" class="btn">Ver Produtos</a>
            </div>
        `;
        finalizarCompraBtn.disabled = true;
        return;
    }

    itensCarrinho.innerHTML = carrinho.map(item => `
        <div class="item-carrinho" data-id="${item.id}">
            <div class="item-imagem">
                <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='assets/img/placeholder.jpg'">
            </div>
            <div class="item-info">
                <h3>${item.nome}</h3>
                <div class="item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                <button class="remover-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
            <div class="item-controle">
                <button class="diminuir" data-id="${item.id}">-</button>
                <span class="quantidade">${item.quantidade}</span>
                <button class="aumentar" data-id="${item.id}">+</button>
            </div>
        </div>
    `).join('');

    // Adicionar eventos
    document.querySelectorAll('.diminuir').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const carrinho = JSON.parse(localStorage.getItem('carrinho'));
            const item = carrinho.find(item => item.id === id);
            
            if (item.quantidade > 1) {
                item.quantidade--;
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                renderizarCarrinho();
                atualizarTotais();
            }
        });
    });

    document.querySelectorAll('.aumentar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const carrinho = JSON.parse(localStorage.getItem('carrinho'));
            const item = carrinho.find(item => item.id === id);
            
            item.quantidade++;
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            renderizarCarrinho();
            atualizarTotais();
        });
    });

    document.querySelectorAll('.remover-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            let carrinho = JSON.parse(localStorage.getItem('carrinho'));
            carrinho = carrinho.filter(item => item.id !== id);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            renderizarCarrinho();
            atualizarTotais();
        });
    });

    finalizarCompraBtn.disabled = false;
    atualizarTotais();
}

// Função para atualizar totais
function atualizarTotais() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    
    subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

// Finalizar compra via WhatsApp
finalizarCompraBtn.addEventListener('click', () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Formatar mensagem para WhatsApp
    let mensagem = "📋 *PEDIDO DO SITE* 📋\n\n";
    mensagem += "🛒 *Itens do Carrinho:*\n\n";
    
    carrinho.forEach((item, index) => {
        mensagem += `*${index + 1}. ${item.nome.toUpperCase()}*\n`;
        mensagem += `   - Quantidade: ${item.quantidade}\n`;
        mensagem += `   - Preço unitário: R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
        mensagem += `   - Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    const total = calcularTotalCarrinho();
    mensagem += `💰 *VALOR TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    mensagem += "Por favor, confirme este pedido e informe:\n";
    mensagem += "• Forma de pagamento\n";
    mensagem += "• Endereço de entrega (se aplicável)\n";
    mensagem += "• Telefone para contato\n\n";
    mensagem += "Agradecemos pela preferência! ❤️";
    
    // Abrir WhatsApp (sem número fixo - usuário escolhe o contato)
    window.open(`https://wa.me/?text=${encodeURIComponent(mensagem)}`, '_blank');
    
    // Opcional: Limpar carrinho após envio
    // localStorage.removeItem('carrinho');
    // renderizarCarrinho();
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrinho();
});