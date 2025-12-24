import { useFullpage } from "./useFullpage";

export const useSectionProgress = () => {
  const { progress } = useFullpage as any;
  return progress;
};
