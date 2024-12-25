import { Request, Response } from 'express';
import {GetAllSongs, GetIdAllSongs } from './DataBase/dao/song';
//import { Sai_Htee_Sai,Khin_Maung_Toe } from './DataBase/model/song';

 export const homepageGetHandler = (_: Request, res: Response) => {
     res.render('index');
 };


 export const lobbyGetHandler = async (req: Request, res: Response) => {
    try {
      const songs = await GetAllSongs();
      const Idsongs = await GetIdAllSongs();
      console.log(Idsongs,songs);
      res.render('lobby', { songs , Idsongs }); 
    } 
    catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).send('Internal Server Error');
      }
  };
  
export const getArtistDetailsHandler = async (req: Request, res: Response): Promise<void> => {
  const { artistName } = req.params;
  try {
      const songs = await GetAllSongs(); // Fetch all songs or a filtered list
      const artistSongs = songs.filter(song => song.artist === artistName);

      if (artistSongs.length > 0) {
          res.render('artist-details', { artist: artistName, songs: artistSongs });
      } else {
          res.status(404).send('Artist not found');
      }
  } catch (error) {
      console.error('Error fetching artist details:', error);
      res.status(500).send('Internal server error');
  }
};