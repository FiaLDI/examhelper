"use client";

import { Exam } from "@/entities/exam";
import { useExamGetById } from "@/features/exam-getter";

export const QuestionList = ({id}: {id: string}) => {
    const Exam: Exam = useExamGetById({id});

    return (
        <div className="p-5 max-w-7xl mx-auto w-full text-white flex flex-col gap-5">
            <div className="">
                <div className="text-sm text-neutral-400">{Exam? Exam.id: null}</div>
            </div>
        </div>
    )
}