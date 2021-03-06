<h1 align="center">
    <img align="center" src="/web/src/assets/logo.svg" alt="NLW Heat" />
</h1>

## 💻 Sobre o projeto

Projeto desenvolvido na missão Impulse do **NLW Heat** oferecida pela [Rocketseat](https://www.rocketseat.com.br/).

DoWhile2021 é uma aplicação onde as pessoas podem compartilhar suas expectativas sobre o evento DoWhile.

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/community/file/1031699316177416916/%5BNLW-Heat---Mission%3A-Impulse%5D-DoWhile2021">
  <img alt="Badge Figma" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Mobile

<p align="center">
  <img alt="Mobile Home" src=".github/mobile-home.png" width="300px">
  <img alt="Mobile Home Conectado" src=".github/mobile-home-logado.png" width="300px">
</p>

### Web

<p align="center">
  <img alt="Web home" src=".github/web-home.png" >
  <img alt="Web home conectado" src=".github/web-home-logado.png">
</p>


## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta node-heat) 
2. Frontend (pasta web)
3. Mobile (pasta app)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar configurar o seu ambiente de trabalho:

📝[Notion com passo a passo](https://efficient-sloth-d85.notion.site/Impulse-240cb588fb8d4089917c7a6cef0008b3)

### Criar a aplicação OAuth no GitHub

Para a autenticação, que é feita através do GitHub, é necessário criar um aplicativo OAuth no seu GitHub:

- Para realizar a criação da aplicação basta acessar: [Link](https://github.com/settings/developers)

- Para rodar a autenticação via web e mobile é necessário criar uma aplicação OAuth para cada um, e dependendo de qual você for utilizar é necessário alterar os valores do Client ID e Client secrets no arquivo .env

#### Web

![createApp-web](.github/create-app-forWeb.gif)

1. Onde no campo Homepage URL você irá colocar a rota do servidor, nesse caso é *http://localhost:4000*
2. E no campo Authorization callback URL a rota da sua aplicação Web, nessa caso *http://localhost:3000*

#### Mobile

![createApp-web](.github/createApp-mobile.gif)

<span>URL Base: https://auth.expo.io/@you/your-app</span>

- Onde no lugar do *@you* você adicionará seu usuário do expo.
- E no *your-app* o nome da sua aplicação, que você encontra no app.json na raiz da aplicação.

##### Mais informações

- [Como criar um aplicativo OAuth no Github](https://docs.github.com/pt/developers/apps/building-oauth-apps/creating-an-oauth-app)
- [Documentação Autenticação Expo](https://docs.expo.dev/guides/authentication/#github)

---

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:POliveira29/nlw-heat-DoWhile2021.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-heat-DoWhile2021

# Vá para a pasta server
$ cd node-heat

# Instale as dependências
$ yarn

# Configurar as variáveis ambientes (.env). O arquivo .env deve ser criado dentro da raiz do projeto com essas variáveis:
$ GITHUB_CLIENT_ID = O Client ID da sua aplicação
$ GITHUB_CLIENT_SECRET = O Client secrets da sua aplicação
$ JWT_SECRET = Gerar código MD5 hash e atribuir aqui
```
Gerando código MD5 Hash

Basta inserir algum texto qualquer e clicar no botão que o código MD5 Hash será gerado

![](.github/createmd5hash.gif)

```
# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:4000 - acesse http://localhost:4000 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:POliveira29/nlw-heat-DoWhile2021.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-heat-DoWhile2021

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### 📱 Rodando a aplicação mobile (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:POliveira29/nlw-heat-DoWhile2021.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-heat-DoWhile2021

# Vá para a pasta da aplicação mobile
$ cd app

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ expo start

# Uma aba chamada expo será aberta, com algumas opções para rodar a aplicação
# Segue abaixo um vídeo explicando como rodar o app no iOS e Android
```

📹[Emulando React Native no iOS/Android com Expo](https://www.youtube.com/watch?v=eSjFDWYkdxM)

## 🛠️ Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  + [Prisma](https://www.prisma.io)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)**
-   **[Socket.io](https://socket.io/)**

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[React Dom](https://yarnpkg.com/package/react-dom)**
-   **[Sass](https://yarnpkg.com/package/sass)**
-   **[Socke.io](https://socket.io/)**

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[Expo App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)**
-   **[Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)**
-   **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)**
-   **[Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)**
-   **[Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)**
-   **[Moti](https://moti.fyi/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Iphone X Helper](https://github.com/ptelad/react-native-iphone-x-helper)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Socke.io](https://socket.io/)**


#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Teste Back End:  **[Insomnia](https://insomnia.rest/)**


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
