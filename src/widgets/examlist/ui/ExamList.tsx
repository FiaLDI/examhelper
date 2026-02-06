"use client";

import { EXAM_SEED, ExamCard } from "@/entities/exam";
import { useExamStore } from "@/entities/exam/model/store";
import { CreateExamForm } from "@/features/exam/create";
import { EditExamForm } from "@/features/exam/edit";
import { useModal } from "@/features/open-modal";
import { Grid2x2, Plus, Rows2 } from "lucide-react";
import { useEffect, useState } from "react";

export type View = "block" | "list" 

export const ExamList = () => {

    const [view, setView] = useState<View>("block");

    const { exam, addExam, removeExam, editExam, startExam } = useExamStore();
    const { openModal, closeModal }= useModal();

    useEffect(() => {
        startExam();
    }, []);

    return (
        <div className="p-5 max-w-7xl mx-auto w-full text-white flex flex-col gap-5">
            <div className="flex w-full gap-5 items-center justify-between">
                <div className=" flex w-full items-center gap-5">
                    <h2 className="text-2xl ">Список экзаменов </h2> 
                    <div className="flex h-fit">
                        <button onClick={()=> {openModal((<CreateExamForm create={addExam} close={closeModal} />), "Создание экзамена")}}>
                            <Plus />
                        </button>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button data-active={view === "list"} className="" onClick={() => setView("list")}><Rows2 /></button>
                    <div data-active={view === "block"} onClick={() => setView("block")}><Grid2x2 /></div>
                </div>
            </div>  
            <div 
                data-view={view} 
                className={
                    "grid data-[view=block]:grid-cols-1 data-[view=block]:sm:grid-cols-2 data-[view=block]:lg:grid-cols-3 gap-3"
                }>
                {exam && exam.map((val, id) => 
                    <ExamCard 
                        key={`exam-${val.id}-${id}`} 
                        title={val.title} 
                        description={val.description} 
                        remove={() => {
                            removeExam(val)}
                        } 
                        edit={()=> {
                            openModal((
                                <EditExamForm 
                                    edit={editExam} 
                                    close={closeModal} 
                                    base={val} 
                                />), 
                            "Изменение экзамена")
                        }} 
                    />
                )}
            </div>
        </div>
    )
}