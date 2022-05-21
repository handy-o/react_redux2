import './scss/style.scss'
import { useState, useRef, useEffect } from 'react'



function App() {
	console.log('App function call again!')
	let [num, setNum] = useState(0);
	// state에 담아버리면?
	//let [wid, setWid] = useState(null);

	// useEffect(() => {
	// 	const box = document.querySelector('.box'); -> 못찾음
	// }, [])

	const box = useRef(null);
	const wid = useRef(null);
	useEffect(() => {
		window.addEventListener('resize', () => {
			// 브라우저가 리사이즈 될 때마다 계속해서 화면을 재랜더링 
			//setWid(window.innerWidth)

			// useEffect에 담아보면?
			// 모션 실행시 자주 바뀌어야 되는 값을 담을때에도 useRef 사용
			wid.current = window.innerWidth;
			console.log(wid.current);
		})
	}, [])


	// useEffect(() => {
	// 	console.log(box)
	// }, [])
	useEffect(() => {
		console.log(wid)
	}, [wid])


	return (
		<section>
			<button onClick={() => {
				setNum(--num);
				box.current.style.transform = `rotate(${45 * num}deg)`;
			}}>prev</button>
			<button onClick={() => {
				setNum(++num);
				box.current.style.transform = `rotate(${45 * num}deg)`;
			}}>next</button>

			{/* 참조하고 싶은 가상돔에 ref 속성을 추가하고 useRef로 만든 빈 객체 연결 */}
			<div className="box" ref={box}></div>
		</section>
	);
}

export default App;


/*
	useRef
	아직 리얼돔으로 변경되지 않은 가상돔을 미리 객체에 담아서 참조

	const 변수 = useRef(초기값);
	- current 라는 키값이 있는 객체에 초기값을 담아서 변수에 할당
	- 반환된 객체를 가상돔 요소에 ref속성으로 지정
	- ref로 지정된 가상돔이 해당 객체에 참조 됨
	- useRef는 보통 제어해야 되는 가상돔을 참조할 때 주로 쓰임
	- useRef에 담겨있는 값이 변경이 될 때 화면이 재렌더링이 일어나지 않음
	- 특정 컴포넌트 함수가 재렌더링 되더라도 useRef에 담겨있는 값은 계속 유지가 된다.
	- useRef는 모션작업을 할때 특정 값이 모션에 의해서 게속 변경이 되더라도 해당 컴포넌트 함수를 재호출하지 않음
	- ex)스크롤 할 때마다 지정된 박스의 위치로 스크롤해야할 때,, 스크롤할때마다 렌더링된다 ? 오.. 과부하


*/
