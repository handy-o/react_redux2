import './scss/style.scss'
import { useState, useEffect } from 'react'
import ColorBox from './ColorBox';
import CountBox from './CountBox';
import Popup from './Popup';


function App() {
	console.log('app');


	useEffect(() => {
		console.log('처음 컴포넌트 생성')
	}, []) // 콜백함수 + 의존성배열

	// 팝업 열고 닫기
	const [pop, setPop] = useState(false);


	return (
		<>
			<CountBox />
			<ColorBox />

			<hr />
			<hr />
			<p>팝업이 안보이는 상태에서 버튼 클릭시 토글로 보였다 안보였다하게</p>
			<button onClick={() => setPop(!pop)}> {pop ? '팝업 닫기' : '팝업 열기'} </button>

			{pop ? <Popup /> : null}

		</>
	);
}

export default App;
