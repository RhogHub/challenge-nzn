# Challenge NZN

## Descrição
Este é um projeto que implementa uma API para buscar um alvo (target) em um array de inteiros ordenado em ordem crescente. A função retorna o índice do alvo no array, se ele existir. Caso contrário, retorna -1.

## Instruções de Uso

### Rodando a aplicação
1. Certifique-se de ter o Node.js instalado em seu sistema. Caso não tenha, você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).
2. Clone este repositório em sua máquina local.
3. Navegue até o diretório raiz do projeto.
4. Execute o seguinte comando no terminal para instalar as dependências:
    ```bash
    npm install
    ```
5. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação:
    ```bash
    npm run desafio
    ```
6. A aplicação estará agora em execução e pronta para receber solicitações.

### Rodando Testes
- Este projeto inclui testes automatizados para garantir o funcionamento correto da API.
- Para executar os testes, basta executar o seguinte comando:
    ```bash
    npm test
    ```

### Utilizando a API
- A API oferece um único endpoint `search`, acessível via método HTTP POST.
- O endpoint espera dois parâmetros:
    - `target`: o valor alvo a ser pesquisado no array.
    - `nums`: um array de inteiros ordenado em ordem crescente onde o alvo será buscado.
- O endpoint retornará o índice do alvo no array se ele for encontrado. Caso contrário, retornará -1.
- Exemplo de solicitação:
    ```http
    POST /search
    Content-Type: application/json

    {
        "target": 5,
        "nums": [1, 3, 5, 7, 9]
    }
    ```
- Exemplo de resposta bem-sucedida:
    ```json
    {
        "index": 2
    }
    ```
- Exemplo de resposta quando o alvo não é encontrado:
    ```json
    {
        "index": -1
    }
    ```

## Tecnologias Utilizadas
- Node.js (v18.17.1)
- Express.js (v4.18.2)
- Jest.js (v29.7.0)

## Autor
Rodrigo Godoi <rhog.dev@gmail.com>

---
Este projeto foi criado como parte de um desafio na NZN.

