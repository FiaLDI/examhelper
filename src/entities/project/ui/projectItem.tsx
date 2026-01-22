"use client";
import { motion } from "framer-motion";
import { ProjectItemType } from "../types/project.types";
import { Github, Lock } from "lucide-react";

export const ProjectItem = ({project}: {project: ProjectItemType}) => 
    (
        <motion.div
        key={project.id}
        className="relative p-5 rounded-xl bg-neutral-900/40
                    flex flex-col gap-3 border border-neutral-800
                    hover:border-neutral-700 transition"
    >
      <div className="absolute top-4 right-4">
        {project.link && !project.isPrivate && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-white transition"
            title="View repository"
          >
            <Github size={18} />
          </a>
        )}

        {project.isPrivate && (
          <div
            className="text-neutral-500 cursor-default"
            title="Private repository"
          >
            <Lock size={16} />
          </div>
        )}
      </div>

      <h4 className="text-xl font-semibold pr-8">
        {project.title}
      </h4>

      <p className="text-sm text-neutral-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-md
                       bg-neutral-900/60 border border-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>)