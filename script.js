// Armazenar todos os acidentes registrados
const acidentes = [];

// Função para adicionar a área vermelha no mapa com base nas coordenadas em pixels
function adicionarAreaVermelha() {
    const localizacao = document.getElementById('localizacao').value;
    const descricao = document.getElementById('descricao').value;
    
    // Converter a localização (no formato "x,y") para coordenadas numéricas
    const coordenadas = localizacao.split(',');
    let x = parseInt(coordenadas[0].trim());
    let y = parseInt(coordenadas[1].trim());
    
    if (isNaN(x) || isNaN(y) || descricao.trim() === "") {
        alert('Por favor, insira uma localização válida e uma descrição para o acidente.');
        return;
    }

    // Limitar as coordenadas para o intervalo de 0 a 100
    x = Math.max(0, Math.min(100, x));  // Limita o valor de x entre 0 e 100
    y = Math.max(0, Math.min(100, y));  // Limita o valor de y entre 0 e 100

    // Criar um objeto de acidente
    const acidente = {
        x, y, descricao
    };

    // Adicionar o acidente ao array de acidentes
    acidentes.push(acidente);

    // Criar a área vermelha para o novo acidente
    const area = document.createElement('div');
    area.classList.add('area-vermelha');
    
    // Verifique se as coordenadas estão dentro da área do mapa
    const mapa = document.querySelector('.mapa');
    const mapaWidth = mapa.offsetWidth;  // Largura do mapa em pixels
    const mapaHeight = mapa.offsetHeight;  // Altura do mapa em pixels

    const areaSize = 50;  // A área vermelha terá 50px de largura e altura

    // Posicionar a área vermelha com base nas coordenadas limitadas
    area.style.left = `${(x / 100) * mapaWidth - areaSize / 2}px`;  // Ajusta a posição de x proporcionalmente
    area.style.top = `${(y / 100) * mapaHeight - areaSize / 2}px`;  // Ajusta a posição de y proporcionalmente
    area.style.display = 'block';  // Exibe a área vermelha
    
    // Adicionar a área vermelha ao mapa
    mapa.appendChild(area);

    // Criar o card com as informações
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <strong>Localização:</strong> (${x}, ${y})<br>
        <strong>Descrição:</strong> ${descricao}
    `;

    // Adicionar o card à lista de cards
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.appendChild(card);
    
    // Limpar os campos do formulário
    document.getElementById('localizacao').value = '';
    document.getElementById('descricao').value = '';
    
    // Feedback para o usuário
    alert(`Acidente registrado com sucesso em (${x}, ${y}).`);
}

