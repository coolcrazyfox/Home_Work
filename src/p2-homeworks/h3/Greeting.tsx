import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.errorInput : s.notErrorInput // need to fix with (?:)

    return (
        <div className={s.main}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.addBtn} onClick={addUser} >add</button>
            <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
