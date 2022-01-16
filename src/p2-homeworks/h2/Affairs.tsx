import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import a from  './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    // setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div>

            {mappedAffairs}

            <button className={a.clnAll} onClick={setAll}>All</button>
            <button className={a.clnHigh} onClick={setHigh}>High</button>
            <button className={a.clnMiddle} onClick={setMiddle}>Middle</button>
            <button className={a.clnLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
