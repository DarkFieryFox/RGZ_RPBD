import {useEntities} from "../../util/useEntities";
import {progressApi} from "../../api/ProgressApi";
import {useState} from "react";
import {Progress} from "../../api/base";
import {ProgressForm} from "./ProgresssForm";
import {ProgressCard} from "./ProgresssCard";

export const ProgresssPage: React.FC = () => {
    const [progresss, _, refresh] = useEntities(progressApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: Progress) => {
        progressApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, parent?: Progress) => {
        if (!id || !parent) return
        progressApi.edit(id, parent).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        progressApi.delete(id).finally(refresh)
    }

    return (
        <div className="progress-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                <ProgressForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {progresss?.map(c => <ProgressCard key={c.id} progress={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}