# Podcast Manager

## Description
Um app ao estilo Netflix, onde você pode centralizar diferentes episódios de podcasts separados por categorias.

## Domain
Podcasts feitos em vídeo.

## Features
- Listar os podcasts em seções de categorias: [Saúde, Bodybuilding, Mentalidade, Humor, Esporte, Corrida]
- Filtrar episódios por nome de podcast

#### Example of a JSON File returned:
```json
[
  {
      "podcastName": "Flow",
      "episodeName": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS3",
      "coverPhoto": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      "linkVideo": "https://www.youtube.com/watch?v=pQSuQmUfS30",
      "categories": ["saúde", "esporte", "bodybuilding"]
  },
  {
      "podcastName": "Flow",
      "episodeName": "RUBENS BARRICHELLO - Flow #339",
      "videoId": "4KDGTdiOV4I",
      "coverPhoto": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
      "linkVideo": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
      "categories": ["esporte", "corrida"]
  }
]
```

## Technologies Used

- **[Node.js](https://nodejs.org/)**: É um ambiente de execução JavaScript do lado do servidor que permite criar aplicações de rede escaláveis e rápidas.

- **[TypeScript](https://www.typescriptlang.org/)**: É uma linguagem de programação que é um superconjunto do JavaScript, adicionando tipagem estática e outros recursos avançados ao JavaScript.

- **[tsx](https://github.com/esbuild-kit/tsx)**: É uma ferramenta que permite executar arquivos TypeScript diretamente, sem precisar compilá-los previamente, facilitando o desenvolvimento e testes.

- **[@types/node](https://www.npmjs.com/package/@types/node)**: São definições de tipo TypeScript para o Node.js, permitindo uma melhor integração e autocompletar no desenvolvimento com TypeScript.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Navegue para o diretório do projeto:
   ```bash
   cd podcast-manager
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Usage
1. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
2. Acesse a API em `http://localhost:3333`.

## Contributing
Sinta-se à vontade para enviar pull requests e abrir issues.

## License
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

Espero que isso ajude! Se precisar de mais alguma coisa, estou à disposição.