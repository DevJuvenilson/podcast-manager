import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

//CRIANDO SERVIDOR
const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // listar podcast
    if (req.method === "GET" && req.url === "/api/list") {
        await getListEpisodes(req, res);
    }

    // filtrar podcast
    if (req.method === "GET" && req.url === "/api/episode") {
        await getFilterEpisodes(req, res)
    }
});

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server initiated on the port ${port}`);
})