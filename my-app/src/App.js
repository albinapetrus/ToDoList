
import './App.css';

import React, { useState } from 'react';

import { IoMdAddCircle } from "react-icons/io";

import { ImBin } from "react-icons/im";

import { FaUndoAlt } from "react-icons/fa";

function App() {
    const [list, setList] = useState([]); // Стан для масиву списку
    const [inputValue, setInputValue] = useState(''); // Стан для введеного тексту
    const [showInput, setShowInput] = useState(false); // Стан для контролю видимості інпуту

    const clear = () => {
        setList([]);
    }

    function isEmpty(){
        if(list.length<=0){
            return showNothing();
        }
        return null;
    }

    const showNothing = () => {
        return (<div className='empty'>
            <h2>Планів нема.....       Додайте пункти до списку справ</h2>
            <img className='empty-img' src = '/img/empty-box_7486744.png' width ='200px' />
        </div>)
    }

    // Додавання нового елемента до списку
    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setList([...list, inputValue]); // Додаємо новий елемент до списку
            setInputValue(""); // Очищаємо інпут
            setShowInput(false); // Приховуємо інпут після додавання
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Оновлюємо значення стану inputValue
    };



    return (
        <div className="App">
            <header>
                <div className='headerlogo'>MyPerfectPlanner</div>
                <div className='icons-section'>
                <div className='box'>
                    <IoMdAddCircle
                        onClick={() => setShowInput(true)}
                        className='add'
                    />
                    <span className='add1'>Add to list</span>
                </div>

                <div className='box'>
                    <ImBin
                        onClick={clear}
                        className='add'/>
                    <span className='add1'>Clear list</span>
                </div>

                <div className='box'>
                    <FaUndoAlt className='add'/>
<span className='add1'>Undo</span>
                </div>
                </div>

            </header>

            <main>
                <h1>To do list:</h1>



                {showInput && (
                    <div className="input-section">
                        <input className='input'
                               type="text"
                               value={inputValue}
                               onChange={handleInputChange} // Оновлення тексту
                               placeholder="Введіть справу"
                        />
                        <button onClick={handleAddItem} className='okbut'>
                            +
                        </button>
                    </div>
                )}

                {isEmpty()}
                {list.length >0 &&(
                    <ul className='to-do'>
                        {list.map((item, index) => (
                            <li key={index} className='list-item'>
                                {item}
                            </li>
                        ))}
                    </ul>

                )}

    </main>
    <footer>
      <h2>Plan your day with TO DO LIST!</h2>
    </footer>
    </div>

  );
}

export default App;
