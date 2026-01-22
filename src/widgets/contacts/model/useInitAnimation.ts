import { FullpageContext } from "@/features/custom-scroll/model";
import { useContext } from "react";

const CONTACT_INDEX = 4;

export const useInitAnimation = (): {isActive: boolean; } => {
    const ctx = useContext(FullpageContext);

    const { index } = ctx;
    const isActive = index === CONTACT_INDEX;

    return {isActive}
}