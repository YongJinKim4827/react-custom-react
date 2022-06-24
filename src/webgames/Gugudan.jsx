import React, { useState } from 'react';
import HistoryList from './HistoryList';

const Gugudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    const [problemNo, setProblemNo] = useState(0);// 문제의 고유번호를 지정하기위해 사용
    const [correctCount, setCorrectCount] = useState(0);
    const [updateInputVlaue, setUpdateInputValue] = useState(0);

    const calculate = () => {
        let correct = true;
        if(parseInt(inputValue) === first*second){
            setResult("정답!!")
            setCorrectCount(correctCount+1);
        }else{
            setResult("땡!!!");
            correct = false;
        }
        const problemItem = {
            id : problemNo,
            first : first,
            second : second,
            answer : first * second,
            input : parseInt(inputValue),
            copyInput : parseInt(inputValue),
            correct : correct,
            isUpdate : false
        }
        //History에 추가
        setHistory([problemItem, ...history])
        // 문제의 고유 번호 변경
        setProblemNo(problemNo + 1);
        // 입력 값 초기화
        setInputValue('');
        //문제를 다시 제출하는 기능
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const onUpdateChange = (e, item) => {
        //이게 맞나..? 아닌거 같은데...
        const updateIdx = history.findIndex((e) => e.id === item.id);
        if(updateIdx !== -1){
            const copyHistory = [...history];
            copyHistory[updateIdx] = {...item, input : e.target.value};
            setHistory(copyHistory);
        }
    }

    const onKeyDown = (e) => {
        //Enter 처리 및 빈 공백일 시, 동작하지 않음
        if(e.keyCode === 13 && e.target.value){
            return calculate();
        }
    }

    const onCancelRemove = (item) => {
        if(item.isUpdate){

        }else{
            setHistory(history.filter((e) => e.id !== item.id));
            if(item.correct){
                if(correctCount > 0){
                    setCorrectCount(correctCount-1);
                }
            }
        }
    }

    const onSaveUpdate = (item) => {
        if(item.isUpdate){
            const saveIdx = history.findIndex((e)=> e.id === item.id);
            const copyHistory = [...history];
            if(saveIdx != -1){
                copyHistory[saveIdx] = {...item, isUpdate : false, copyInput : parseInt(item.input)};
                setHistory(copyHistory);
            }
        }else{
            const updateIdx = history.findIndex((e)=> e.id === item.id);
            const copyHistory = [...history];
            if(updateIdx != -1){
                copyHistory[updateIdx] = {...item, isUpdate : true};
                setHistory(copyHistory);
            }
        }
    }

    return (
        <div>
            <div> 구구단 예제</div>
            <div>
                {first} X {second} 의 값은??
            </div>
            <div>
                <input type='number' placeholder='값을 입력하세요' onChange={onChange} onKeyDown={onKeyDown} value={inputValue}/>
                <button onClick={calculate}>
                    계산
                </button>
            </div>
            <div>
                {result}
            </div>
            <div>
                History [정답 확률 : {correctCount > 0 ? ((correctCount/history.length)*100).toFixed(1)+ "%": "0%"}]
            </div>
            <HistoryList items = {history} onCancelRemove={onCancelRemove} onSaveUpdate = {onSaveUpdate} onUpdateChange={onUpdateChange}/>
        </div>
    );
};

export default Gugudan;