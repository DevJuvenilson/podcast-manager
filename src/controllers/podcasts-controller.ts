import { IncomingMessage, ServerResponse } from 'http';
import { PodcastTransferModel } from '../models/podcast-transfer-model';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { ContentType } from '../utils/content-type';

const defaultContent = { 'Content-Type': ContentType.JSON };

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end();
};