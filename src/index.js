import React from "react";
import bar from "./bar";
import classnames from "classnames";
import styles from "./index.module.less";

const index = () => {
  const _bar = bar();
  console.log(_bar + "test :{}");
};

export default function(props) {
  return (
    <button
      className={classnames(styles.large, styles.bold)}
      style={{ color: props.color }}
    >
      {props.children}
    </button>
  );
}
