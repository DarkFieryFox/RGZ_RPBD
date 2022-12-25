import {Progress} from "../../api/base";
import React, {useState} from "react";
import {ProgressForm} from "./ProgresssForm";
import {Property} from "../Property";

interface Props {
    progress: Progress
    onEdit: (id?: number, progress?: Progress) => void
    onDelete: (id?: number) => void
}

export const ProgressCard: React.FC<Props> = ({ progress, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="card progress-card">
            {isEdit ?
                <ProgressForm progress={progress} onSubmit={(newParent) => { onEdit(progress.id, newParent); setIsEdit(false) }} />
                :
                <div className="progress-card__main">
                    <Property title="Класс:" value={progress.classs} />
                    <Property title="Предмет:" value={progress.subject} />
                    <Property title="Текущий год:" value={progress.year} />
                    <Property title="Оценка за четверть:" value={progress.quarter} />
                    <Property title="Оценка за полугодие:" value={progress.half_yearly} />
                    <Property title="Годовая оценка:" value={progress.yearly} />
                    <Property title="Оценка за экзамен:" value={progress.exam} />
                    <Property title="Итоговая:" value={progress.finaly} />
                </div>
            }
            <div className="progress-card__controls">
                <button className="button"
                        onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(progress.id)}>Удалить</button>
            </div>
        </div>
    )
}