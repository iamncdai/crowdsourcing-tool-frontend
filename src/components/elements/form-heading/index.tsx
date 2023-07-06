import React from "react";

type IProps = {
  title: string;
  icon?: JSX.Element;
};

export const FormHeading: React.FC<IProps> = ({ icon, title }) => {
  return (
    <div className="relative mb-4 flex items-center justify-center">
      <div className="absolute flex h-0.5 w-full bg-gray-200" />
      <h4 className="relative z-1 bg-white px-3 text-lg font-semibold uppercase">
        {icon && <span className="mr-1.5">{icon}</span>}
        {title}
      </h4>
    </div>
  );
};
