import React from 'react'
import m from './Message.module.css'


type messageData = {
    id: number,
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageData) {
    return (
        <div>
            <div className={m.reviews}>
                <figure className={m.avatar}>
                    <img className={m.imgAvatar} src={props.avatar}/>
                    <figcaption className={m.nameText}>{props.name}</figcaption>

                </figure>
                <div className={m.comment}>
                    <div className={m.commentBubble}>
                        <h1 className={m.commentText}>{props.message}</h1>
                        <h3 className={m.author}>{props.name}</h3>
                        <h3 className={m.time}>{props.time}</h3>
                    </div>
                </div>
            </div>
            <div className={m.inputMessageContainer}>
                <input type="text" className={m.inputField}/>
                <button className={m.submitBtn}>send</button>
            </div>
        </div>
    )
}
export default Message
