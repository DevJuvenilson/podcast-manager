import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

//CRIANDO SERVIDOR
const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

        // listar podcast
        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        // filtrar podcast
        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response)
        }
    }
);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server initiated on the port ${port}`);
})