import styled from "styled-components";

export default function TextArea({ name, cols, rows, changeValue, value }) {
  return (
    <div className="w-full">
      <textarea
        className="bg-bgFirst w-full p-[8px] text-txThird/90 outline-none rounded-lg resize-none overflow-hidden shadow focus:border-txSecond focus:border sm:h-[150px] md:h-auto"
        required
        name={name}
        cols={cols}
        rows={rows}
        placeholder="Mensaje"
        onChange={changeValue}
        value={value}
      />
    </div>
  );
}

