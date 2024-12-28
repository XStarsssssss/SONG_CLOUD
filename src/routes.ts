import { Router } from 'express';
import {  lobbyGetHandler, homepageGetHandler,getArtistDetailsHandler,getSongDetailsHandler} from './handler';

const router = Router();


router.get('/', homepageGetHandler);

router.get('/lobby', lobbyGetHandler);

router.get('/artist-details/:artistName', getArtistDetailsHandler);

router.get('/song-details/:songName', getSongDetailsHandler);



export default router;