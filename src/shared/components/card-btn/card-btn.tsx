import React from "react";
type Props = {
  label: string;
  click: () => void;
  close?: boolean;
};
export const CardBtn = (props: Props) => {
  const { label, click, close } = props;
  const style =
    close === false
      ? "mt-4 w-full px-4 max-w-[350px] py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-sm font-semibold shadow-md"
      : "flex-1 px-2 py-2 max-w-[200px] rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center";
  return (
    <button onClick={click} className={style}>
      {label}
    </button>
  );
};
