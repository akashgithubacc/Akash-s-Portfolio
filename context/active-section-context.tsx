"use client";

import React, { createContext, useContext, useState } from "react";
import { SectionNames, ActiveSectionContextProviderProps } from "@/lib/types";

type ActiveSectionContextProps = {
  activeSection: SectionNames;
  setactiveSection: React.Dispatch<React.SetStateAction<SectionNames>>;
  timeOfLastClick: number;
  settimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

//Creating a context Store

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setactiveSection] = useState<SectionNames>("Home");
  const [timeOfLastClick, settimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setactiveSection,
        timeOfLastClick,
        settimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const contextObj = useContext(ActiveSectionContext);

  if (contextObj === null) {
    throw new Error(
      "useActiveSectionContext must be used under a ActiveSectionContextProvider Function",
    );
  }

  return contextObj;
}
