import './scss/style.scss'
import { useState, useEffect } from 'react'


function App() {
	// 숫자 카운트 업다운
	let [num, setNum] = useState(0); //초기값 0

	// div 박스 색상 바꾸기
	console.log('app');
	let [bg, setBg] = useState('grey');

	// 3항구분처럼.. 의조성 배열이 비어이는 useEffect는 컴포넌트가 처음 생성시 실행
	// window 객체에 이벤트 연결, fetch로 데이터 호출할 때
	useEffect(() => {
		console.log('처음 컴포넌트 생성')
	}, []) // 콜백함수 + 의존성배열

	// num state가 변경될 때마다 실행되는 useEffect
	useEffect(() => {
		console.log('num state값 변경')
	}, [num])

	// bg state값이 변경될 때마다 실행되는 useEffect
	useEffect(() => {
		console.log('bg stat값 변경')
	}, [bg])

	return (
		<>
			<article className="counter">
				<h1>{num}</h1>
				<button onClick={() => setNum(--num)}>감소</button> {/*전이연산자*/}
				<button onClick={() => setNum(++num)}>증가</button>
			</article>

			<article className="colorBox">
				<div className="box" style={{ backgroundColor: bg }}></div>
				<button onClick={(e) => setBg(e.target.innerText)}>red</button>
				<button onClick={(e) => setBg(e.target.innerText)}>green</button>
				<button onClick={(e) => setBg(e.target.innerText)}>blue</button>

			</article>
		</>
	);
}

export default App;
