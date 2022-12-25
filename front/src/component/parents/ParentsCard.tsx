import {Parents} from "../../api/base";
import React, {useState} from "react";
import {ParentsForm} from "./ParentsForm";
import {Property} from "../Property";

interface Props {
    parent: Parents
    onEdit: (id?: number, parent?: Parents) => void
    onDelete: (id?: number) => void
}

export const ParentsCard: React.FC<Props> = ({ parent, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card parents-card">
            {isEdit ?
                <ParentsForm parent={parent} onSubmit={(newParent) => { onEdit(parent.id, newParent); setIsEdit(false) }} />
                :
                <div className="parents-card__main">

                    <Property title="Имя:" value={parent.name} />
                    <Property title="Фамилия:" value={parent.surname} />
                    <Property title="Отчество:" value={parent.patronymic} />
                    <Property title="Адрес:" value={parent.address} />
                    <Property title="Степень родства:" value={parent.degree} />
                </div>
            }
            <div className="parents-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(parent.id)}>Удалить</button>
            </div>
        </div>
    )
}