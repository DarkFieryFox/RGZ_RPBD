import {Parents} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {parentApi} from "../../api/ParentsApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    parent?: Parents
    onSubmit: (parents: Parents) => void
}

export const ParentsForm: React.FC<Props> = ({ parent, onSubmit }) => {

    const [parents] = useEntities(parentApi)
    const [name, setName] = useState(parent?.name ?? '')
    const [surname, setSurname] = useState(parent?.surname ?? '')
    const [patronymic, setPatronymic] = useState(parent?.patronymic ?? '')
    const [address, setAddress] = useState(parent?.address ?? '')
    const [degree, setDegree] = useState(parent?.degree ?? '')

    const onClick = () => {
        if (name === '') return
        onSubmit({
            name,
            surname,
            patronymic,
            address,
            degree
        })
        setName('')
        setSurname('')
        setPatronymic('')
        setAddress('')
        setDegree('')
    }

    return (
        <div className="parents-form">
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Фамилия:" value={<input type="text" value={surname} onChange={e => setSurname(e.target.value)} />} />
            <Property title="Отчество:" value={<input type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} />} />
            <Property title="Адрес:" value={<input type="text" value={address} onChange={e => setAddress(e.target.value)} />} />
            <Property title="Степень родства:" value={<input type="text" value={degree} onChange={e => setDegree(e.target.value)} />} />
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}