import { db } from '../dbConnection';
import { Song } from '../model/song';

export const AddFavorite = async (Id: number): Promise<void> => {
    await db.query('INSERT INTO Favorite (song_Id) VALUES (?)', [Id]);
};

export const GetAllFavorites = async (): Promise<Song[]> => {
    const [rows] = await db.query<Song[]>(
        `SELECT s.* 
         FROM Favorite f
         JOIN Song s ON f.song_Id = s.Id`
    );
    return rows;
};