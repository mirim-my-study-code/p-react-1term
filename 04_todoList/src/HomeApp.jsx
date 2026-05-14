import { useState } from "react";

import TodoListApp from "./TodoListApp"
import CounterApp from "./CounterApp";

function ButtonPageApp({setPage}){
    const buttonStyle = {fontSize:"1.1rem", width:"100px", height:"100px"}
    return(
        <>
            <h1>App LIST</h1>
            <ul>
                <li>
                    <button 
                        style={buttonStyle} 
                        onClick={()=>setPage('counterapp')}
                    >CounterApp
                    </button></li>
                <li>
                    <button
                        style={buttonStyle}
                        onClick={()=>setPage('todolistapp')}
                    >TodoListApp
                    </button>
                </li>
            </ul>
        </>
    );
}

export default function HomeApp(){
    const [page, setPage] = useState('home');
    return(
    <>  
        {page!=='home' && <Button style={{position:'fixed', left:'10px', bottom:'10px', cursor:'pointer', borderRadius:'8px', border:none, padding:'6px'}}
            >돌아가기</Button>}
        {page==='home' && <ButtonPageApp setPage={setPage}/>}
        {page==='counterapp' && <CounterApp/>}   
        {page==='todolistapp' && <TodoListApp/>} 
    </>
    );
}