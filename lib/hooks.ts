import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { SectionNames } from "./types";


type useSectionInViewProps = {
  sectionName: SectionNames;
  thresholdValue: number;
};

export function useSectionInView({
  sectionName,
  thresholdValue,
}: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: thresholdValue,
  });
  const { setactiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setactiveSection(sectionName);
    }
  }, [inView, setactiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
