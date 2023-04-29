// React Dependencies
import React from "react";

// External Dependencies
import clsx from "clsx";

// Internal Dependencies
import { NoteType } from "../../domain/note";
import { usePressObserver } from "../PressObserver";

import styles from "./Key.module.css";

type PressCallback = () => void;
type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;

  onUp: PressCallback;
  onDown: PressCallback;
};

export const Key: React.FC<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(
        styles.key,
        styles[type],
        pressed && styles["is-pressed"]
      )}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};
