import { useEffect } from 'react'


function Popup() {
    useEffect(() => {
        console.log('팝업생성');


        // 클린업함수
        // useEffect함수 안쪽에서 컴포넌트가 소멸될 때 실행
        return () => {
            console.log('팝업 소멸')
        }
    }, [])

    return (
        <aside className="pop">
            <h1>팝업</h1>
            <span className="close">close</span>
        </aside>
    )
}

export default Popup