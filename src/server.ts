import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

//CRIANDO SERVIDOR
const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    // listar podcast
    if (req.method === "GET" && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    // filtrar podcast
    if (req.method === "GET" && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res)
    }
});

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server initiated on the port ${port}`);
})