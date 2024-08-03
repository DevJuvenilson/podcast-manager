import { IncomingMessage, ServerResponse } from 'http';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { ContentType } from '../utils/content-type';
import { StatusCode } from '../utils/status-code';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content = await serviceListEpisodes();

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
};