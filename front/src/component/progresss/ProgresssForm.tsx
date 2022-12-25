import {Progress} from "../../api/base";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    progress?: Progress
    onSubmit: (progress: Progress) => void
}

export const ProgressForm: React.FC<Props> = ({ progress, onSubmit }) => {


    const [classs, setClasss] = useState(progress?.classs ?? '')
    const [subject, setSubject] = useState(progress?.subject ?? '')
    const [year, setYear] = useState<number>(progress?.year ?? 0)
    const [quarter, setQuarter] = useState<number>(progress?.quarter ?? 0)
    const [half_yearly, setHalf_yearly] = useState<number>(progress?.half_yearly ?? 0)
    const [yearly, setYearly] = useState<number>(progress?.yearly ?? 0)
    const [exam, setExam] = useState<number>(progress?.exam ?? 0)
    const [finaly, setFinaly] = useState<number>(progress?.finaly ?? 0)

    const onClick = () => {
        if (classs === '') return
        onSubmit({
            classs,
            subject,
            year,
            quarter,
            half_yearly,
            yearly,
            exam,
            finaly
        })
        setClasss('')
        setSubject('')
        setYear(0)
        setQuarter(0)
        setHalf_yearly(0)
        setYearly(0)
        setExam(0)
        setFinaly(0)
    }

    return (
        <div className="progress-form">
            <Property title="Класс:" value={<input type="text" value={classs} onChange={e => setClasss(e.target.value)} />} />
            <Property title="Предмет:" value={<input type="text" value={subject} onChange={e => setSubject(e.target.value)} />} />
            <Property title="Текущий год:" value={<input type="text" value={year} onChange={e => setYear(Number(e.target.value))} />} />
            <Property title="Четвертная оценка:" value={<input type="text" value={quarter} onChange={e => setQuarter(Number(e.target.value))} />} />
            <Property title="Полугодовая оценка:" value={<input type="text" value={half_yearly} onChange={e => setHalf_yearly(Number(e.target.value))} />} />
            <Property title="Годовая оценка:" value={<input type="text" value={yearly} onChange={e => setYearly(Number(e.target.value))} />} />
            <Property title="Экзаменационная оценка:" value={<input type="text" value={exam} onChange={e => setExam(Number(e.target.value))} />} />
            <Property title="Итоговая оценка:" value={<input type="text" value={finaly} onChange={e => setFinaly(Number(e.target.value))} />} />
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}