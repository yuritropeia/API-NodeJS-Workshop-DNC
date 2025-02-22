# Projeto: API Introdutória com Fastify e PostgreSQL

## Descrição
Este é um projeto introdutório de criação de uma API utilizando **Node.js** e **Fastify**. O objetivo é demonstrar conceitos básicos de criação, leitura, atualização e exclusão de usuários em um banco de dados PostgreSQL hospedado no **Neon.tech**. O projeto também implementa validação de dados com **Zod** e criptografia de senhas com **bcrypt**.

## Tecnologias Utilizadas
- **Node.js** - Ambiente de execução para JavaScript
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** - Banco de dados relacional
- **Neon.tech** - Plataforma para hospedagem de bancos PostgreSQL na nuvem
- **Zod** - Biblioteca para validação de schemas
- **Bcrypt** - Biblioteca para criptografia de senhas
- **dotenv** - Gerenciamento de variáveis de ambiente
- **REST Client** - Extensão do VS Code para testar requisições HTTP

## Estrutura do Projeto
```
📦 projeto-api
├── 📂 src
│   ├── 📂 database
│   │   ├── create_database.js  # Criação do banco de dados "users"
│   │   ├── db_connection.js    # Conexão com o banco no Neon.tech
│   ├── 📂 routes
│   │   ├── user.routes.js      # Rotas CRUD dos usuários
│   ├── 📂 schemas
│   │   ├── users.js            # Validações do usuário (Zod)
│   ├── server.js               # Arquivo principal que inicia o servidor
├── .env                        # Configuração de variáveis de ambiente (não vai para o Git)
├── .env.example                # Modelo do arquivo .env
├── routes.http                  # Teste de requisições com REST Client
└── README.md                    # Documentação do projeto
```

## Banco de Dados no Neon.tech
O **Neon.tech** é uma plataforma moderna para hospedagem de bancos de dados PostgreSQL, oferecendo:
- **Escalabilidade automática** para lidar com diferentes cargas de trabalho
- **Backups automáticos** para garantir segurança dos dados
- **Suporte a conexões serverless**, permitindo maior eficiência no uso de recursos
- **Interface intuitiva** para facilitar a gestão do banco de dados

Essa plataforma é ideal para desenvolvedores que buscam uma solução confiável e flexível para armazenar dados remotamente.

## Rotas da API
A API contém as seguintes rotas:

| Método  | Rota        | Descrição                         |
|---------|------------|---------------------------------|
| POST    | /users     | Cria um novo usuário (com senha criptografada) |
| GET     | /users     | Lista todos os usuários        |
| GET     | /users/:id | Busca um usuário específico    |
| PUT     | /users/:id | Atualiza um usuário            |
| DELETE  | /users/:id | Remove um usuário              |

## Testando a API com REST Client
O projeto inclui um arquivo `routes.http` para facilitar os testes das requisições HTTP usando a extensão **REST Client** no VS Code. Essa ferramenta permite enviar requisições diretamente do editor sem precisar utilizar outras ferramentas como Postman ou cURL.

### Vantagens do REST Client:
- **Facilidade**: Executa requisições diretamente do código
- **Agilidade**: Não requer interface gráfica externa
- **Histórico de requisições**: Permite salvar e reutilizar chamadas

## Executando o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-api.git
   cd projeto-api
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o arquivo `.env` com a sua string de conexão do Neon.tech:
   ```sh
   CONNECTION_STRING=postgres://seu-usuario:senha@neon.tech/seu-banco
   ```
4. Execute a criação do banco de dados:
   ```sh
   node src/database/create_database.js
   ```
5. Inicie o servidor:
   ```sh
   node src/server.js
   ```
6. Acesse a API em `http://localhost:3000/users`

## Licença
Este projeto está sob a licença MIT.
