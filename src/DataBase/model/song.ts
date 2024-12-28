import { RowDataPacket } from 'mysql2';

export interface Song extends RowDataPacket {
    Id: number;
    song_name: string;
    artist: string;
    artist_image?: string;
    cover_image?: string;
    music_audio: string;
    artist_about : string;
    lyrics: string;
};
