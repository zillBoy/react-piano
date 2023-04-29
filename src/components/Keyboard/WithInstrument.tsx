// Internal Dependencies
import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount/useMount";
import { Keyboard } from ".";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  useMount(() => load());

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
