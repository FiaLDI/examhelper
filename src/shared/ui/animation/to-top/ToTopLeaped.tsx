import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ToTopLeaped = ({children}: {children: ReactNode}) => ( 
    <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-30%" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
    >
        {children}
    </motion.section>
)