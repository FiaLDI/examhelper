"use client";
import { motion } from "framer-motion";
import { IComponentProps } from "./interface";

export const ToDown = (props: IComponentProps) => {

    return (
        <motion.header
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="flex max-w-7xl w-full mx-auto justify-end h-0 relative"
        >
            {props.children}
        </motion.header>
    )
}