import { useState, useEffect } from 'react'

function ColorBox() {
    // div 박스 색상 바꾸기
    let [bg, setBg] = useState('grey');


    useEffect(() => {
        console.log('bg state값 변경')
    }, [bg])

    return (
        <article className="colorBox">
            <div className="box" style={{ backgroundColor: bg }}></div>
            <button onClick={(e) => setBg(e.target.innerText)}>red</button>
            <button onClick={(e) => setBg(e.target.innerText)}>green</button>
            <button onClick={(e) => setBg(e.target.innerText)}>blue</button>

        </article>
    )
}

export default ColorBox