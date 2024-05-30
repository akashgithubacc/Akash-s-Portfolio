import { links } from "./data";

export type SectionNames = (typeof links)[number]["name"];
export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
