import { Request, Response } from 'express';
import {GetAllSongs, GetId1Songs } from './DataBase/dao/song';


 export const homepageGetHandler = (_: Request, res: Response) => {
     res.render('index');
 };


 export const lobbyGetHandler = async (req: Request, res: Response) => {
    try {
      const songs = await GetAllSongs();
      res.render('lobby', { songs }); 
    } 
    catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).send('Internal Server Error');
      }
  };
  export const SongId1GetHandler = async (req: Request, res: Response) => {
    try {
      const songs = await GetId1Songs();
      res.render('lobby', { songs }); 
    } 
    catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).send('Internal Server Error');
      }
  };
  
export const getArtistDetailsHandler = async (req: Request, res: Response): Promise<void> => {
  const { artistName } = req.params;
  try {
      const songs = await GetAllSongs(); 
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
export const getSongDetailsHandler = async (req: Request, res: Response): Promise<void> => {
  const { songName } = req.params;
  try {
      const songs = await GetAllSongs(); 
      const songstitle = songs.filter(song => song.song_name === songName);

      if (songstitle.length > 0) {
          res.render('song-details', { song : songName, songs : songstitle });
      } else {
          res.status(404).send(' not found');
      }
  } catch (error) {
      console.error('Error fetching song details:', error);
      res.status(500).send('Internal server error');
  }
};



