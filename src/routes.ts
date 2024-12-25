import { Router } from 'express';
import {  lobbyGetHandler, homepageGetHandler,getArtistDetailsHandler} from './handler';

const router = Router();


router.get('/', homepageGetHandler);

router.get('/lobby', lobbyGetHandler);

router.get('/artist-details/:artistName', getArtistDetailsHandler);



export default router;