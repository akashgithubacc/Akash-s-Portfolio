import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pb-3 text-center text-[1.4rem] font-bold">{children}</h2>
  );
}
