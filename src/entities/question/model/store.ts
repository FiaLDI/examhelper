"use client";

import { create } from "zustand";
import { EXAM_SEED } from "./seed";
import { Question } from "../types/question.types";

type QuestionStore = {
  questions: Question[];
  current: string;
  initialized: boolean;

  startQuestions: () => void;
  getQuestion: (id: string) => Question;
  getQuestionsByExamId: (id: string) => Question[];
  addQuestions: (question: Question) => boolean;
  removeQuestions: (question: Question) => boolean;
  editQuestions: (question: Question) => boolean;
};

export const useQuestionStore = create<QuestionStore>((set, get) => ({
  questions: [],
  current: "",
  initialized: false,

  startQuestions: () => {
        if (typeof window === "undefined") return;
        if (get().initialized) return;

        const raw = localStorage.getItem("questions");

        if (!raw) {
            localStorage.setItem("questions", JSON.stringify(EXAM_SEED));
            set({ questions: EXAM_SEED, initialized: true });
            return;
        }

        try {
            const parsed = JSON.parse(raw) as Question[];

            if (!Array.isArray(parsed) || parsed.length === 0) {
                localStorage.setItem("questions", JSON.stringify(EXAM_SEED));
                set({ questions: EXAM_SEED, initialized: true });
                return;
            }

            set({ questions: parsed, initialized: true });
        } catch {
            localStorage.setItem("questions", JSON.stringify(EXAM_SEED));
            set({ questions: EXAM_SEED, initialized: true });
        }
    },

  getQuestion: (id) =>
    get().questions.find((e) => e.id === id) ?? {
        id,
        title: "",
        description: "",
        number: "",
        examId: "",
        additionDescription: "",
        answer: ""
    },

    getQuestionsByExamId: (id) =>
        get().questions.filter(e => e.examId === id),


  addQuestions: (question) => {
    set((state) => {
      const next = [...state.questions, question];
      localStorage.setItem("questions", JSON.stringify(next));
      return { questions: next };
    });
    return true;
  },

  removeQuestions: (question) => {
    set((state) => {
      const next = state.questions.filter((e) => e.id !== question.id);
      localStorage.setItem("questions", JSON.stringify(next));
      return { questions: next };
    });
    return true;
  },

  editQuestions: (exam) => {
    set((state) => {
      const next = state.questions.map((e) =>
        e.id === exam.id ? exam : e
      );
      localStorage.setItem("questions", JSON.stringify(next));
      return { questions: next };
    });
    return true;
  },
}));
