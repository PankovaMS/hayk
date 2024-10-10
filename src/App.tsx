import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import huyak from './logo.png';
import  huyak_2 from './logo_2.png'
import './App.css';

function App() {
    let savedCount = localStorage.getItem('clickCount') ?? '0';

  
    const [count, setCount] = useState<number>(parseInt(savedCount, 10));
    const [currentImage, setCurrentImage] = useState<string>(huyak);

    useEffect(() => {
        if (savedCount) {
            setCount(parseInt(savedCount, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('clickCount', String(count));
    }, [count]);

    // Обработчик нажатия кнопки
    const handleMouseDown = () => {
        setCurrentImage(huyak_2);
    };

    const handleMouseUp = () => {
        setCount(count + 1);
        setCurrentImage(huyak);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={currentImage} className="App-logo" alt="logo" />
                <button
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}>
                    CLICK
                </button>
                <p>You clicked {count} times</p>
            </header>
        </div>
    );
}

export default App;