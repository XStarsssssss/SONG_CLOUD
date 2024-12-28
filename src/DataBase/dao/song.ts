import { db } from '../dbConnection';
import { Song } from '../model/song';

export const GetAllSongs = async (): Promise<Song[]> => {
  const [rows] = await db.query<Song[]>('SELECT * FROM Song');
  return rows;
};
export const GetId1Songs = async (): Promise<Song[]> => {
  const [rows] = await db.query<Song[]>('SELECT * FROM Song Where Id = 1');
  return rows;
};

