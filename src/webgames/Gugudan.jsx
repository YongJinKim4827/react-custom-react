import React, { useState } from 'react';

const Gugudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    const [problemNo, setProblemNo] = useState(0);// 문제의 고유번호를 지정하기위해 사용
    const [correctCount, setCorrectCount] = useState(0);

    const calculate = () => {
        let correct = true;
        if(parseInt(inputValue) === first*second){
            setResult("정답!!")
            setCorrectCount(correctCount + 1);
        }else{
            setResult("땡!!!");
            correct = false;
        }
        const problemItem = {
            id : problemNo,
            first : first,
            second : second,
            Answer : first * second,
            input : parseInt(inputValue),
            correct : correct
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

    const onKeyDown = (e) => {
        //Enter 처리 및 빈 공백일 시, 동작하지 않음
        if(e.keyCode === 13 && e.target.value){
            return calculate();
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={{"width" : "100px", "textAlign" : "center"}}>
                                문제
                            </td>
                            <td style={{"width" : "100px", "textAlign" : "center"}}>
                                내가 입력한 값
                            </td>
                            <td style={{"width" : "100px", "textAlign" : "center"}}>
                                정답
                            </td>
                            <td style={{"width" : "100px", "textAlign" : "center"}}>
                                정답 유무
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(item => {
                        return (
                            <tr key={item.id} style={item.correct ? {"backgroundColor" : "#CEF279"} : {"backgroundColor" : "#FFA7A7"}}>
                            <td style={{"textAlign" : "center"}}>{item.first} X {item.second}</td>
                            <td style={{"textAlign" : "center"}}>{item.input}</td>
                            <td style={{"textAlign" : "center"}}>{item.Answer}</td>
                            <td style={{"textAlign" : "center"}}>{item.correct ? "O" : "X"}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Gugudan;