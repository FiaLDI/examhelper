import { Exam, useExamStore } from "@/entities/exam";

export const useExamGetById = ({id}: {id: string}): Exam => {

    const { getExam } = useExamStore();

    return getExam(id)
}