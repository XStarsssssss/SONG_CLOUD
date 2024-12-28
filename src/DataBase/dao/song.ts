import { db } from '../dbConnection';
import { Song } from '../model/song';

export const GetAllSongs = async (): Promise<Song[]> => {
  const [rows] = await db.query<Song[]>('SELECT * FROM Song');
  return rows;
};

