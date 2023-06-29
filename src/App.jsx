import { useState } from 'react';
import './App.css';

function App() {

const [item,setItem] = useState([]);

const [title,setTitle]=useState('');
  
const titleHandler=(event)=>{setTitle(event.target.value)};

const addbtnHandler = () => {
  if (title===""){
    alert("please type your title")
  } else {
const newItem = {
  id: item,
  title: title,
};
setItem([...item,newItem]);
setTitle('');
 ++item.id;
};}

  return (
    <div className='centered'>
    <div className='whole-Box'>
        <div className='input-Box'>
            <input type='text' value={title} onChange={titleHandler} />
            <button onClick={addbtnHandler}>추가하기</button>
        </div>
        <div className='title-Box'>
          <h1>Todo List</h1>
        </div>
        <div className='item-Box'>
         {item.map(function(iteminput){
                        return (
                          <div key={iteminput.id} className="item-style">
                              <p className='item-title'>{iteminput.title}</p>
                          </div>
                        );
                      })}
        </div>
    </div>
    </div>
  );
}

export default App;
