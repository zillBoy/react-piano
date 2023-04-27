// React Dependencies
import React from "react";

// External Dependencies
import clsx from "clsx";

// Internal Dependencies
import { NoteType } from "../../domain/note";

import styles from "./Key.module.css";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const Key: React.FC<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};
