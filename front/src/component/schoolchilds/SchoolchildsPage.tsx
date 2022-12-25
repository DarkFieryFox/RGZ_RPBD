import {useEntities} from "../../util/useEntities";
import {schoolchildApi} from "../../api/SchoolchildsApi";
import {useState} from "react";
import {Schoolchilds} from "../../api/base";
import {SchoolchildForm} from "./SchoolchildsForm";
import {SchoolchildCard} from "./SchoolchildsCard";

export const SchoolchildPage: React.FC = () => {
    const [schoolchilds, _, refresh] = useEntities(schoolchildApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (schoolchild: Schoolchilds) => {
        schoolchildApi.create(schoolchild).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, schoolchild?: Schoolchilds) => {
        if (!id || !schoolchild) return
        schoolchildApi.edit(id, schoolchild).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        schoolchildApi.delete(id).finally(refresh)
    }

    return (
        <div className="schoolchild-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                <SchoolchildForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {schoolchilds?.map(c => <SchoolchildCard key={c.id} schoolchild={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}