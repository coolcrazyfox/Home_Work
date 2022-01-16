import React from 'react'
import Message from "./Message";



const messageData = {
    id: 1,
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div >
            <hr/>
            homeworks 1
            {/*<Message name=" Your name" tasks={messageData}/>
            should work (должно работать)*/}

            <Message
                id={messageData.id}
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
