import { Pencil, Trash } from "lucide-react";

type ExamCardProps = {
  title: string;
  description: string;
  number?: string;
  remove?: () => void;
  edit?: () => void;
  link?: () => void;
};

export const ExamCard = ({
  title,
  description,
  number = "40",
  remove,
  edit,
  link
}: ExamCardProps) => {
  return (
    <div className="relative border-2 border-indigo-400 p-3 flex flex-col justify-between gap-3 min-w-0">
      {/* Content */}
      <div className="min-w-0">
        <h3
          title={title}
          className="text-base font-semibold truncate"
        >
          {title}
        </h3>

        <p className="text-sm text-neutral-400 whitespace-normal wrap-break-word">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button 
          className="text-sm hover:text-indigo-400 transition-colors cursor-pointer"
          onClick={() => {
            if(link) link();
          }}
        >
          Подробнее
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-400">
            {number} вопросов
          </span>

          {remove && (
            <button
              onClick={remove}
              className="hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Удалить экзамен"
            >
              <Trash size={18} />
            </button>
          )}

          {edit && (
            <button
              onClick={edit}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
              aria-label="Редактировать экзамен"
            >
              <Pencil size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
