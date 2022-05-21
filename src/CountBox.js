import { useState, useEffect } from 'react'

function CountBox() {
    // 숫자 카운트 업다운
    let [num, setNum] = useState(0); //초기값 0

    useEffect(() => {
        console.log('num state값 변경')
    }, [num])

    return (
        <article className="counter">
            <h1>{num}</h1>
            <button onClick={() => setNum(--num)}>감소</button> {/*전이연산자*/}
            <button onClick={() => setNum(++num)}>증가</button>
        </article>
    )
}

export default CountBox