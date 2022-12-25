import {useEntities} from "../../util/useEntities";
import {parentApi} from "../../api/ParentsApi";
import {useState} from "react";
import {Parents} from "../../api/base";
import {ParentsForm} from "./ParentsForm";
import {ParentsCard} from "./ParentsCard";

export const ParentsPage: React.FC = () => {
    const [parents, _, refresh] = useEntities(parentApi)

    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (parents: Parents) => {
        parentApi.create(parents).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: Parents) => {
        if (!id || !client) return
        parentApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        parentApi.delete(id).finally(refresh)
    }
    return (
        <div className="parents_page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                <ParentsForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {parents?.map(c => <ParentsCard key={c.id} parent={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}