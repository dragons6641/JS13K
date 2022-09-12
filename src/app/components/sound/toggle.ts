import { PlaybackRate } from '../../types';

AFRAME.registerComponent('toggle', {
  schema: {
    playbackRate: {default: PlaybackRate.Default},
    volume: {default: 1.0},
    loop: {default: false},
    muted: {default: false},
  },
  init() {
    this.system.initAudio(this.data);
  },
  update() {
    this.system.updateAudio(this.data);
  }
});
