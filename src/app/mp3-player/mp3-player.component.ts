import { Component, OnInit } from '@angular/core';
import { Track } from '../audio-player/model/track.model';
@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css'],
})
export class Mp3PlayerComponent implements OnInit {
  constructor() {}
  onEnded() {}

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [10];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[] = [
    // Material Style Advance Audio Player Playlist

    {
      title: 'Melody',
      link: 'https://hengwm.free.resourcespace.com/pages/download.php?direct=1&noattach=true&ref=1007&ext=mp3&k=9788e1abc8',
      artist: 'Too Loud for the Legion',
      duration: 2*60+59,
    },
    {
      title: 'Crimson Sea',
      link: 'https://hengwm.free.resourcespace.com/pages/download.php?direct=1&noattach=true&ref=1008&ext=mp3&k=8c16b7d40a',
      artist: 'Too Loud for the Legion',
      duration: 3*60+24,
    },
    {
      title: 'Disappear',
      link: 'https://hengwm.free.resourcespace.com/pages/download.php?direct=1&noattach=true&ref=1006&ext=mp3&k=ec1e55541c',
      artist: 'Too Loud for the Legion',
      duration: 3*60+28,
    },
    {
      title: 'Better Part of You',
      link: 'https://hengwm.free.resourcespace.com/pages/download.php?direct=1&noattach=true&ref=1004&ext=mp3&k=b97f9b0d7f',
      artist: 'Too Loud for the Legion',
      duration: 3*60+19,
    },
    {
      title: 'My Friends',
      link: 'https://hengwm.free.resourcespace.com/pages/download.php?direct=1&noattach=true&ref=1005&ext=mp3&k=12baa30b7b',
      artist: 'Too Loud for the Legion',
      duration: 3*60+41,
    },


  ];

  ngOnInit(): void {}
}
