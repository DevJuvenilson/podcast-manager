import * as http from "http";
import { app } from "./app";

//CRIANDO SERVIDOR
const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server initiated on the port ${port}`);
});