import React from 'react'

const YesNo = (props) => {
    function clickHandler() {
        console.log('Yes')
    }
    function clickHandlerNo() {
        console.log('No')
    }
    return (
        <div className="Love">
            <h1>{props.name}, Do You Love Me?</h1>
            <button className="YesButton" onClick={clickHandler}>Yes</button>
            <button className="NoButton" onClick={clickHandlerNo}> No </button>
        </div>
    )
}

export default YesNo
