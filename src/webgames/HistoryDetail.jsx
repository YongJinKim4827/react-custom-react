import React, {useState} from 'react';

const HistoryDetail = (props) => {
    const backgroundColor = props.item.correct ? "#CEF279": "#FFA7A7";
    // const [updateInputVlaue, setUpdateInputValue] = useState(props.item.input);
    return (
        <div style={{display : "flex", backgroundColor : backgroundColor}}>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.first} X {props.item.second}
            </div>
            <div style={{width : "20%", textAlign : "center"}}>
                {props.item.isUpdate ? <input type="text" value={props.item.input} onChange={(e)=>props.onUpdateChange(e, props.item)}/> : props.item.input}
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
                onClick={() => props.onCancelRemove(props.item) }>
                    {props.item.isUpdate ? "취소": "제거"}</button>
                <button
                    style={{backgroundColor : "#319af6", color : "#FFFFFF"}}
                onClick={() => props.onSaveUpdate(props.item) }>
                    {props.item.isUpdate ? "저장": "변경"}</button>
            </div>
        </div>
    );
};

export default HistoryDetail;