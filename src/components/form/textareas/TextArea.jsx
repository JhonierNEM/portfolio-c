import styled from "styled-components";

export default function TextArea({ name, cols, rows, changeValue, value }) {
  return (
    <div className="w-full md:h-full">
      <textarea
        className="bg-bgFirst w-full p-[8px] text-tx-second outline-none rounded-lg resize-none overflow-hidden shadow focus:border-txSecond focus:border sm:h-[150px] md:h-full"
        required
        name={name}
        cols={cols}
        rows={rows}
        placeholder="Message"
        onChange={changeValue}
        value={value}
      />
    </div>
  );
}

