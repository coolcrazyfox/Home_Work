import React from 'react'
import b from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
            // show some text

            <button className={b.btnDelete} onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
