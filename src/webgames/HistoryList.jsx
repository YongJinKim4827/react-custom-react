import React from 'react';
import HistoryDetail from './HistoryDetail';

const HistoryList = (props) => {
    return (
        <div>
            <div style={{display : "flex"}}>
                <div style={{width : "20%", textAlign : "center"}}>
                    문제
                </div>
                <div style={{width : "20%", textAlign : "center"}}>
                    내가 입력한 값
                </div>
                <div style={{width : "20%", textAlign : "center"}}>
                    실제 정답
                </div>
                <div style={{width : "20%", textAlign : "center"}}>
                    정답 유무
                </div>
                <div style={{width : "20%", textAlign : "center"}}>
                    기록 변경
                </div>
            </div>
            <div>
                {
                    props.items.map((item, idx) => {
                        return <HistoryDetail key = {idx} item = {item} onCancelRemove = {props.onCancelRemove} onSaveUpdate={props.onSaveUpdate} onUpdateChange={props.onUpdateChange}/>
                    })
                }
            </div>
        </div>
    );
};

export default HistoryList;