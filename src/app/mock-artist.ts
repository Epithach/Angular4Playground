import { Rapper } from './shared/Rapper'
import { Artist } from './shared/Artist';
import { MusicType } from './shared/MusicType';



export const Artists : Artist[] = [
    { id: 0, displayName: "Ed Sheeran", fullName:"Ed Sheeran", rating: 4.9, musicType: [ MusicType.Pop ] },
    { id: 1, displayName: "Niska", fullName:"Ni Ska", rating: 4.7, musicType: [ MusicType.Rap, MusicType.Trap ] },
    { id: 2, displayName: "Chris Brown", fullName:"Chris Marron", rating: 4, musicType: [ MusicType.Rap, MusicType.RnB] },
    { id: 3, displayName: "Keblack", fullName:"", rating: 3.9, musicType: [  ] },
    { id: 4, displayName: "Eric Claptnon", fullName:"Eric Clapton", rating: 4.6, musicType: [] },
    { id: 5, displayName: "Damso", fullName:"Dems", rating: 4.9, musicType: [ MusicType.Rap, MusicType.Trap ] },
    { id: 6, displayName: "Mickael Jackson", fullName:"Mickael Jackson", rating: 5, musicType: [] },
    { id: 7, displayName: "Jonhy Halliday", fullName:"Jean Philippe Smet", rating: 2, musicType: [ MusicType.Pop, MusicType.Rock ] },
    { id: 8, displayName: "Booba", fullName:"Ellie Yaffa", rating: 4.3, musicType: [ MusicType.Rap, MusicType.Trap ] },
    { id: 9, displayName: "Fort Minor", fullName:"Mike Shinoda", rating: 3.7, musicType: [ MusicType.Rap, MusicType.Trap, MusicType.Pop, MusicType.Rock, MusicType.Metal ] },

];