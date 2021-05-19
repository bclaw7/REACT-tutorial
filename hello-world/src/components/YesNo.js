import React from 'react'

const YesNo = () => {
    function clickHandler() {
        console.log('Yes')
    }
    return (
        <div>
            <button className="Buttons" onClick={clickHandler}>Yes</button>
            <button className="Buttons"> No </button>
        </div>
    )
}

export default YesNo
