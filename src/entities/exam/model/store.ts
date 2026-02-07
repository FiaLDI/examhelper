"use client";

import { create } from "zustand";
import { EXAM_SEED } from "./seed";
import { Exam } from "../types/exam.types";

type ExamStore = {
  exam: Exam[];
  current: string;
  initialized: boolean;

  startExam: () => void;
  getExam: (id: string) => Exam;
  addExam: (exam: Exam) => boolean;
  removeExam: (exam: Exam) => boolean;
  editExam: (exam: Exam) => boolean;
};

export const useExamStore = create<ExamStore>((set, get) => ({
  exam: [],
  current: "",
  initialized: false,

  startExam: () => {
        if (typeof window === "undefined") return;
        if (get().initialized) return;

        const raw = localStorage.getItem("exam");

        if (!raw) {
            localStorage.setItem("exam", JSON.stringify(EXAM_SEED));
            set({ exam: EXAM_SEED, initialized: true });
            return;
        }

        try {
            const parsed = JSON.parse(raw) as Exam[];

            if (!Array.isArray(parsed) || parsed.length === 0) {
            localStorage.setItem("exam", JSON.stringify(EXAM_SEED));
            set({ exam: EXAM_SEED, initialized: true });
            return;
            }

            set({ exam: parsed, initialized: true });
        } catch {
            localStorage.setItem("exam", JSON.stringify(EXAM_SEED));
            set({ exam: EXAM_SEED, initialized: true });
        }
    },


  getExam: (id) =>
    get().exam.find((e) => e.id === id) ?? {
      id,
      title: "",
      description: "",
      number: "",
    },

  addExam: (exam) => {
    set((state) => {
      const next = [...state.exam, exam];
      localStorage.setItem("exam", JSON.stringify(next));
      return { exam: next };
    });
    return true;
  },

  removeExam: (exam) => {
    set((state) => {
      const next = state.exam.filter((e) => e.id !== exam.id);
      localStorage.setItem("exam", JSON.stringify(next));
      return { exam: next };
    });
    return true;
  },

  editExam: (exam) => {
    set((state) => {
      const next = state.exam.map((e) =>
        e.id === exam.id ? exam : e
      );
      localStorage.setItem("exam", JSON.stringify(next));
      return { exam: next };
    });
    return true;
  },
}));
