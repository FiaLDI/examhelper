import { Exam } from "@/entities/exam"
import { DefaultButton } from "@/shared/ui/button"
import { useState } from "react"

export const EditExamForm = ({base, edit, close}: {base: Exam, edit: (exam: Exam) => boolean; close: ()=>void}) => {
    const [data, setData] = useState<Exam>({
        id: base.id, 
        title: base.description, 
        description: base.description, 
        number: base.number
    });

    return (
        <div className="flex flex-col lg:w-[450px] p-3 items-center gap-7">
            <div className="w-full ">
                <label htmlFor="" className="w-full text-sm text-neutral-300">Title</label>
                <input 
                    type="text" 
                    name="title"
                    className="w-full box-border text-base text-white p-1 border outline-0" 
                    onChange={(e) => {
                        setData({...data, title: e.currentTarget.value})
                    }} 
                    value={data.title}
                />
                <label 
                    htmlFor="" 
                    className="w-full text-sm text-neutral-300"
                >
                    Description
                </label>
                <textarea 
                    className="w-full box-border text-base text-white p-1 border min-h-[100px] outline-0 pb-5"
                    
                    onChange={(e) => {
                        setData({...data, description: e.currentTarget.value})
                    }} 
                    value={data.description}
                />
            </div>
            
            <DefaultButton title="Create" handler={() => {edit(data); close()}} />
        </div>
    )
}