import {Schoolchilds} from "../../api/base";
import React, {useState} from "react";
import {SchoolchildForm} from "./SchoolchildsForm";
import {Property} from "../Property";


interface Props {
    schoolchild: Schoolchilds
    onEdit: (id?: number, schoolchild?: Schoolchilds) => void
    onDelete: (id?: number) => void
}

export const SchoolchildCard: React.FC<Props> = ({ schoolchild , onEdit, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card schoolchild-card">
            {isEdit ?
                <SchoolchildForm schoolchild={schoolchild} onSubmit={(newSchoolchild) => { onEdit(schoolchild.id, newSchoolchild); setIsEdit(false) }} />
                :
                <div className="schoolchild-card__main">
                    <Property title="Имя:" value={schoolchild.name} />
                    <Property title="Фамилия:" value={schoolchild.surname} />
                    <Property title="Отчество:" value={schoolchild.patronymic} />
                    <Property title="Адрес:" value={schoolchild.address} />
                    <Property title="День рождения:" value={schoolchild.birthday} />
                    <Property title="Год поступления:" value={schoolchild.year_admission} />
                    <Property title="Родитель:" value={<span>{schoolchild.parents?.map((order, idx) => <span key={order.id} className="client-card__order">{order.name} {order.surname} {order.patronymic}{`${idx !== (schoolchild.parents?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />
                    <Property title="Прогресс:" value={<span>{schoolchild.progresss?.map((order, idx) => <span key={order.id} className="client-card__order">{order.classs} {order.subject} {order.year} {order.quarter} {order.half_yearly} {order.yearly} {order.exam} {order.finaly}{`${idx !== (schoolchild.progresss?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />
                </div>
            }
            <div className="schoolchild-card__controls">
                <button className="button"
                        onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(schoolchild.id)}>Удалить</button>
            </div>
        </div>
    )
}