import "./App.css";
import React, { useState } from "react";

const App = () => { 
  const arr = [
    {
      text: "MysQl",
      done: "false",
    },

    {
      text: "PhP",
      done: "false",
    },

    {
      text: "MongoDB",
      done: "false",
    },

    {
      text: "TypeScript",
      done: "false",
    },

    {
      text: "JavaScript",
      done: "false",
    },
  ];

  const [array, setArray] = useState(arr)   
  const [text, setText] = useState()   
  const [textError, setTextError] = useState(false) 
  const [addText, setAddText] = useState(true)

  const handleBlur = () =>{
  if(!text) {
    setTextError(true)
    setAddText(true)  
  } 
}

const handleFocus = () =>{
  if(!text){
    setTextError(true)
  }
  setTextError(false)
}


  const addArray = (e) =>{ 
    setArray(  [
      {     
      text:text,
      done: false

    },  ...array
  
  ])     
  }

  const textValue =(e) =>{
    setText(e.target.value)
    if(!text){
      setAddText(true)
    }else{
      setAddText(false)
    }
 }

  const deleteArr = (done) =>{
    const filtered = array.filter((item, index) =>{
       if(index === done){
        return false
       }
       return true
    })
    setArray(filtered)   
  }

  return (
    <div className="forma">
      <input type="text" value={text} placeholder="Введите текст" onChange={textValue} onBlur={handleBlur} onFocus={handleFocus}  ></input>  
      <button disabled={addText} className="forma_btn" onClick={addArray}>Отправить</button>
      {textError && <div className="textError">  Поле не должно быть пустым </div>}  
      <div className="array">
      {array.map((item, index) => {
        return (
            <div className="arr">
            {item.text}
            <button className='close' onClick={() => deleteArr(index)}>x</button>  
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default App;
