import React from "react";

type IProps = {
  text: string;
};

export const TaskContent: React.FC<IProps> = ({ text }) => {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 font-mono">
      {text}
    </div>
  );
};
