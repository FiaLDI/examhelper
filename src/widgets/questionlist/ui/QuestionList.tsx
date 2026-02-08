"use client";

import { Exam } from "@/entities/exam";
import { useQuestionStore } from "@/entities/question";
import { Question } from "@/entities/question/types/question.types";
import { useExamGetById } from "@/features/exam-getter";
import { useModal } from "@/features/open-modal";
import { Grid2x2, Pencil, Plus, Rows2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type View = "block" | "list" 

export const QuestionList = ({id}: {id: string}) => {
    const Exam: Exam = useExamGetById({id});
    const { questions, addQuestions, removeQuestions, editQuestions, getQuestionsByExamId, startQuestions } = useQuestionStore();
    const { openModal, closeModal } = useModal();
    const [questionExam, setQuestionExam] = useState<Question[]>(getQuestionsByExamId(id));
    const router = useRouter();

        const [view, setView] = useState<View>("block");

    useEffect(() => {
        if (!questionExam) {
            setQuestionExam(getQuestionsByExamId(id));
        }
    }, []);

    return (
        <div className="p-5 max-w-7xl mx-auto w-full text-white flex flex-col gap-5">
            <div className="">
                <div className="text-sm text-neutral-400">{Exam? Exam.id: null}</div>
            </div>
            <div className="flex w-full gap-5 items-center justify-between">
                <div className=" flex w-full items-center gap-5">
                    <h2 className="text-2xl ">Список экзаменов </h2> 
                    <div className="flex h-fit">
                        <button >
                            <Plus />
                        </button>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button data-active={view === "list"} className="" onClick={() => setView("list")}><Rows2 /></button>
                    <div data-active={view === "block"} onClick={() => setView("block")}><Grid2x2 /></div>
                </div>
            </div>
            <div data-view={view} 
                className={
                    "grid data-[view=block]:grid-cols-1 data-[view=block]:sm:grid-cols-2 gap-3"
                }>
                {questionExam.map((val, idx) => (
                    <div key={`question-${val.id}-${idx}`} className="border p-3 flex gap-3">
                        <div className="">{idx + 1}</div>
                        <div className="">{val.title}</div>
                        <button
                            onClick={() => {removeQuestions(val)}}
              className="hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Удалить вопрос экзамена"
            >
              <Trash size={18} />
            </button>
            <button
            //   onClick={edit}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
              aria-label="Редактировать вопрос экзамена"
            >
              <Pencil size={18} />
            </button>
                    </div>
                ))}
            </div>
        </div>
    )
}