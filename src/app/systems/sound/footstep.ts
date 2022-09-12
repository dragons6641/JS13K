// @ts-nocheck
import { footstep } from '../../../utils/sound/sequences';
import { generateAudio } from '../../../utils/sound/sound-box';

AFRAME.registerSystem('footstep', {
  init() {
    this.audio = undefined;
  },
  initAudio(data) {
    this.audio = generateAudio(data, footstep);
  },
  updateAudio(data) {
    this.audio.playbackRate = data.playbackRate;
    this.audio.volume = data.volume;
    this.audio.loop = data.loop;
    this.audio.muted = data.muted;
  },
  playAudio() {
    this.audio.play();
  },
  pauseAudio() {
    this.audio.pause();
  },
});
