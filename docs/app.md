# Podcast Manager

### Description
Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categorias. 

### Domain
Podcast feitos em vídeos.

### Features
 - Listar os podcasts em seções de categorias:
    - [Saúde, bodybuilding, mentalidade, humor, esporte, corrida]
 - Filtrar episódios por nome de podcast

## How?

#### Feature:
 Listar os episódios podcasts em seções de categorias.

### How will I implement it?
 GET: Vou retornar em uma API Rest (json) o nome podcast, nome do episódio, imagem de capa, link

 response:

#### Example of a JSON File returned:
```js
[
  {
      podcastName: "Flow",
      episodeName: "CBUM - Flow #319",
      videoId: "pQSuQmUfS3",
      coverPhoto: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      linkVideo: "https://www.youtube.com/watch?v=pQSuQmUfS30",
      categories: ["saúde", "esporte", "bodybuilding"]
  },
  {
      podcastName: "Flow",
      episodeName: "RUBENS BARRICHELLO - Flow #339",
      videoId: "4KDGTdiOV4I",
      coverPhoto: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
      linkVideo: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
      categories: ["esporte", "corrida"]
  },
]
```