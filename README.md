#Documentação Técnica - Sistema de Mapeamento e Prevenção de Acidentes de Trânsito (MPA)
###1. Introdução
O Sistema de Mapeamento e Prevenção de Acidentes de Trânsito (MPA) é uma solução protótipo que visa reduzir a incidência de acidentes de trânsito por meio do mapeamento visual de ocorrências e da notificação de áreas de risco. O sistema permite aos usuários registrar acidentes, visualizar áreas de risco no mapa e acessar informações detalhadas sobre os incidentes registrados.

Este documento descreve a arquitetura do sistema, as funcionalidades principais e detalhes técnicos da implementação.

###2. Arquitetura do Sistema
####2.1. Estrutura de Arquivos
O sistema é dividido em três arquivos principais:

index.html: Define a estrutura da página, contendo o mapa, o formulário de registro e a área de exibição dos cards.
styles.css: Controla os estilos visuais, incluindo layout do mapa, áreas de risco (áreas vermelhas) e cards de acidentes.
script.js: Implementa a lógica do sistema, como o registro de acidentes, marcação de áreas de risco e exibição de informações.
###3. Funcionalidades do Protótipo
####3.1. Visualização do Mapa
O sistema utiliza uma imagem estática representando a cidade de Vitória da Conquista. A imagem é ajustada para exibição dinâmica no navegador.

Detalhes Técnicos:

Função do Mapa: Permitir marcação de locais de acidentes.
Código Responsável:
O CSS ajusta o layout da imagem.
O JavaScript adiciona dinamicamente áreas de risco (círculos vermelhos) com base nas coordenadas fornecidas.
####3.2. Formulário de Registro de Acidente
O formulário coleta as informações do usuário, incluindo:

Coordenadas: No formato x,y, indicando a localização do acidente.
Descrição: Detalhes sobre o acidente.
#####Detalhes Técnicos:

Função do Formulário: Registrar dados fornecidos pelo usuário.
Código Responsável:
Valida coordenadas para garantir que estão dentro dos limites do mapa.
Salva os dados em uma estrutura para uso posterior.
###3.3. Marcação de Áreas Vermelhas no Mapa
Após o registro de um acidente, o sistema destaca o local correspondente com um círculo vermelho.

#####Detalhes Técnicos:

Função da Área Vermelha: Identificar visualmente locais de acidentes no mapa.
Código Responsável:
Calcula a posição proporcional ao tamanho do mapa.
Representa a área vermelha com um elemento CSS ajustado dinamicamente.
####3.4. Cards de Informação do Acidente
Ao registrar um acidente, o sistema cria um card que contém:

Localização: Coordenadas fornecidas.
Descrição: Texto descritivo sobre o acidente.
Detalhes Técnicos:

Função dos Cards: Exibir informações detalhadas dos acidentes registrados.
Código Responsável:
Gera cards dinamicamente no contêiner de exibição.
Atualiza a interface com os novos registros.
