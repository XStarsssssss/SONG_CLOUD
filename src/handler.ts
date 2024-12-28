import { Request, Response } from 'express';
import {GetAllSongs } from './DataBase/dao/song';
import { AddFavorite,GetAllFavorites } from './DataBase/dao/favorite';

 export const homepageGetHandler = (_: Request, res: Response) => {
     res.render('index');
 };

// GetAllSongFromMysql
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
  
  // Artist-Details
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
// Song-Details
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
// For Fav
export const addFavoriteHandler = async (req: Request, res: Response): Promise<void> => {
  const { songId } = req.body;

  if (!songId) {
      res.status(400).json({ message: 'Song ID is required.' });
      return;
  }

  try {
      await AddFavorite(songId);
      res.status(200).json({ message: 'Song added to favorites!' });
  } catch (error) {
      console.error('Error adding favorite:', error);
      res.status(500).json({ message: 'Failed to add song to favorites.' });
  }
};

export const getAllFavoritesHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
      const favorites = await GetAllFavorites();
      res.render('fav', { favorites }); 
  } catch (error) {
      console.error('Error fetching favorites:', error);
      res.status(500).json({ message: 'Failed to fetch favorites.' });
  }
};