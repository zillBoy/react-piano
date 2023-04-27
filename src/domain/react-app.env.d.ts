/// <reference types="react-scripts" />
import * as Soundfont from "soundfont-player";

type SoundfontType = typeof Soundfont;
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
