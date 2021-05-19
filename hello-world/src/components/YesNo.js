import React from 'react'

const YesNo = () => {
    function clickHandler() {
        console.log('Yes')
    }
    return (
        <div>
            <button onClick={clickHandler}>Yes</button>
            <button>No</button>
        </div>
    )
}

export default YesNo
