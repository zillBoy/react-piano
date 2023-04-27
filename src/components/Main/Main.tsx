// Internal Dependencies
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";

export const Keyboard = () => <>Keyboard</>;

export const Main = () => {
  const AudioContext = useAudioContext();

  return AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
