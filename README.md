# Exercise API

Este projeto é uma API para gerenciar exercícios, desenvolvida com TypeScript e NestJS.

## Descrição

A API de Exercícios permite criar, atualizar, listar e remover exercícios. Ela utiliza o TypeORM para gerenciar a persistência dos dados.

## Tecnologias Utilizadas

- TypeScript
- NestJS
- TypeORM
- Jest (para testes)
- Docker

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/ecsistem/exercise-api.git
   ```

2. Acesse o diretório do projeto:
   ```sh
   cd exercise-api
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

Para rodar a aplicação:

1. Inicie o servidor de desenvolvimento:
   ```sh
   npm run start:dev
   ```

2. Acesse a aplicação em `http://localhost:3000`.

## Docker

Para rodar a aplicação usando Docker:

1. Certifique-se de ter o Docker e o Docker Compose instalados.

2. Execute o comando para iniciar os containers:
   ```sh
   docker-compose up
   ```

3. Acesse a aplicação em `http://localhost:3000`.

## Testes

Para rodar os testes, utilize o comando:

```sh
npm run test
```

## Contribuições

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.