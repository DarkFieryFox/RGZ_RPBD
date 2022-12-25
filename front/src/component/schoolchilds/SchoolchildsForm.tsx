import {Schoolchilds} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {parentApi} from "../../api/ParentsApi";
import {progressApi} from "../../api/ProgressApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    schoolchild?: Schoolchilds
    onSubmit: (schoolchild: Schoolchilds) => void
}

export const SchoolchildForm: React.FC<Props> = ({schoolchild, onSubmit}) => {

    const [parents] = useEntities(parentApi)
    const [progresss] = useEntities(progressApi)

    const [name, setName] = useState(schoolchild?.name ?? '')
    const [surname, setSurname] = useState(schoolchild?.surname ?? '')
    const [patronymic, setPatronymic] = useState(schoolchild?.patronymic ?? '')
    const [address, setAddress] = useState(schoolchild?.address ?? '')
    const [birthday, setBirthday] = useState(schoolchild?.birthday ?? '')
    const [year_admission, setYear_admission] = useState<number>(schoolchild?.year_admission ?? 0)


    const [selectParents, setSelectParents] = useState<string[]>(schoolchild?.parents?.map(o => o.id?.toString() ?? '') ?? [])
    const [selectProgress, setSelectProgress] = useState<string[]>(schoolchild?.progresss?.map(o => o.id?.toString() ?? '') ?? [])

    const onClick = () => {
        onSubmit({
            name,
            surname,
            patronymic,
            address,
            birthday,
            year_admission,
            parents: parents?.filter(os => !!selectParents.find(so => so === os.id?.toString() ?? '-1')),
            progresss: progresss?.filter(os => !!selectProgress.find(so => so === os.id?.toString() ?? '-1'))
        })
        setName('')
        setSurname('')
        setPatronymic('')
        setAddress('')
        setBirthday('')
        setYear_admission(0)
        setSelectParents([])
        setSelectProgress([])
    }

    return (
        <div className="schoolchild-form">
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Фамилия:" value={<input type="text" value={surname} onChange={e => setSurname(e.target.value)} />} />
            <Property title="Отчество:" value={<input type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} />} />
            <Property title="Адрес:" value={<input type="text" value={address} onChange={e => setAddress(e.target.value)} />} />
            <Property title="Дата рождения:" value={<input type="text" value={birthday} onChange={e => setBirthday(e.target.value)} />} />
            <Property title="Год поступления:" value={<input type="text" value={year_admission} onChange={e => setYear_admission(Number(e.target.value))} />} />
            <Property title="Родители:">
                <select multiple value={selectParents}
                        onChange={e => setSelectParents(Array.from(e.target.selectedOptions, option => option.value))}>
                    {parents?.map(m => <option key={m.id}
                                               value={m.id}>{m.surname} {m.name} {m.patronymic}</option>)}
                </select>
            </Property>
            <Property title="Успеваемость:">
                <select multiple value={selectProgress}
                        onChange={e => setSelectProgress(Array.from(e.target.selectedOptions, option => option.value))}>
                    {progresss?.map(m => <option key={m.id}
                                                 value={m.id}>{m.classs} {m.subject} {m.year} {m.quarter} {m.yearly} {m.half_yearly} {m.exam} {m.finaly}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}