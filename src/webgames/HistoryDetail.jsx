import React from 'react';

const HistoryDetail = (props) => {
    const backgroundColor = props.item.correct ? "#CEF279": "#FFA7A7"
    return (
        <div style={{display : "flex", backgroundColor : backgroundColor}}>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.first} X {props.item.second}
            </div>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.input}
            </div>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.answer}
            </div>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.correct ? "O" : "X"}
            </div>
            <div style={{width : "20%", textAlign : "center"}}>
                <button 
                    style={{backgroundColor : "#FF0000", color : "#FFFFFF"}}
                onClick={() => props.onClick(props.item.id) }>제거</button>
            </div>
        </div>
    );
};

export default HistoryDetail;