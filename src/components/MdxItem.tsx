import React from "react";

interface ItemType {
  title: string;
  date: string;
}

export default function MdxItem({ title, date }: ItemType) {
  return (
    <div className="flex flex-row justify-start align-middle">
      <h2 className="text-start font-medium text-xl">{title}</h2>
      <h2 className="text-start font-normal text-xl">{date}</h2>
    </div>
  );
}
