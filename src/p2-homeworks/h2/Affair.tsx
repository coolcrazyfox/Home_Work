import React from 'react'
import b from './Affairs.module.css'
import {AffairType} from "./HW2"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }// need to fix

    return (
        <div className={b.affair}>
            <div className={b.nameText}>{props.affair.name}</div>
            <div className={b.priorityText}>{props.affair.priority}</div>
            <button className={b.btnDelete}
                    onClick={deleteCallback}>Delete
            </button>
        </div>
    )
}

export default Affair
