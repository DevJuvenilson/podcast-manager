import { IncomingMessage, request, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(
        JSON.stringify([
            {
                podcastName: "Flow",
                episodeName: "CBUM - Flow #319",
                videoId: "pQSuQmUfS3",
                categories: ["saúde", "esporte", "bodybuilding"]
            },
            {
                podcastName: "Flow",
                episodeName: "RUBENS BARRICHELLO - Flow #339",
                videoId: "4KDGTdiOV4I",
                categories: ["esporte", "corrida"]
            },
          ])
    );
};