import { Router } from 'express';
import {  lobbyGetHandler, homepageGetHandler,getArtistDetailsHandler,getSongDetailsHandler,addFavoriteHandler,getAllFavoritesHandler} from './handler';

const router = Router();




router.get('/lobby', lobbyGetHandler);

router.get('/artist-details/:artistName', getArtistDetailsHandler);

router.get('/song-details/:songName', getSongDetailsHandler);
router.post('/favorite', addFavoriteHandler);
router.post('/favorite', addFavoriteHandler);

router.get('/fav', getAllFavoritesHandler);
router.get('/', homepageGetHandler);



export default router;