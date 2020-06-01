import localTrack from '../resources/pure.m4a';
import pure from './pure.json';
import ljs from './lounge-jazz-symphony.json'
import ghost from './ghost-in-your-piano.json';

export const playlists = [
  [
    ...pure,
    {
      id: 'local-track',
      url: localTrack,
      title: 'Pure (Demo)',
      artist: 'David Chavez',
      artwork: 'https://i.picsum.photos/id/500/200/200.jpg',
      duration: 28,
    },
  ],
  ghost,
  ljs
]
