import { v4 as uuidv4 } from 'uuid';
import Temontou from './assets/tracks/Temontou.m4a';
import Intro from './assets/tracks/Intro.mp3';
import BasicSpace from './assets/tracks/BasicSpace.mp3';
import Crystalised from './assets/tracks/Crystalised.mp3';
import Fantasy from './assets/tracks/Fantasy.mp3';
import HeartSkippedABeat from './assets/tracks/HeartSkippedABeat.mp3';
import InfinityXX from './assets/tracks/Infinity.mp3';
import Islands from './assets/tracks/Islands.mp3';
import NightTime from './assets/tracks/NightTime.mp3';
import Shelter from './assets/tracks/Shelter.mp3';
import Stars from './assets/tracks/Stars.mp3';
import Vcr from './assets/tracks/Vcr.mp3';
// import Lusovibes from './assets/tracks/Lusovibes.wav';
import TemontouCover from './assets/covers/Temontou.jpg';
import theXXCover from './assets/covers/theXX.jpg';
// import LusovibesCover from './assets/covers/lusovibescover.jpg';

function Chillhop() {

    return ( 
        [
            {
                name: 'Temontou',
                cover: TemontouCover,
                artist: 'Flavia Coelho',
                audio: Temontou,
                color: ['#545519', '#423F17'],
                id: uuidv4(),
                active: false
            },
            // {
            //     name: 'LUSOVIBES - Summer mix in LX',
            //     cover: LusovibesCover,
            //     artist: 'Flying_Beat',
            //     audio: Lusovibes,
            //     color: ['#F3DEEF', '#E7D4F3'],
            //     id: uuidv4(),
            //     active: false
            // },
            {
                name: 'Intro',
                cover: theXXCover,
                artist: 'The XX',
                audio: Intro,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Basic Space',
                cover: theXXCover,
                artist: 'The XX',
                audio: BasicSpace,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Crystalised',
                cover: theXXCover,
                artist: 'The XX',
                audio: Crystalised,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Fantasy',
                cover: theXXCover,
                artist: 'The XX',
                audio: Fantasy,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Heart skipped a beat',
                cover: theXXCover,
                artist: 'The XX',
                audio: HeartSkippedABeat,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Infinity',
                cover: theXXCover,
                artist: 'The XX',
                audio: InfinityXX,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Islands',
                cover: theXXCover,
                artist: 'The XX',
                audio: Islands,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Night Time',
                cover: theXXCover,
                artist: 'The XX',
                audio: NightTime,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Shelter',
                cover: theXXCover,
                artist: 'The XX',
                audio: Shelter,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'Stars',
                cover: theXXCover,
                artist: 'The XX',
                audio: Stars,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
            {
                name: 'VCR',
                cover: theXXCover,
                artist: 'The XX',
                audio: Vcr,
                color: ['#FB99AE', '#172D69'],
                id: uuidv4(),
                active: false
            },
        ]
     );
}
 
export default Chillhop;