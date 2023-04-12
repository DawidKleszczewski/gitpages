import { useState } from "react";
import "./App.css";

const App = () => {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(true);
    const [wynik, setWynik] = useState("");
    const [style, setStyle] = useState("");
    const [styleTak, setStyleTak] = useState("niewidac");
    const [licznik, setLicznik] = useState(0);

    const handleBtn1 = () => {
        setBtn2(!btn2);
        setBtn1(!btn1);
        setStyle("btn2");
        setLicznik(licznik + 1);
    };
    const handleBtn2 = () => {
        setBtn2(!btn2);
        setBtn1(!btn1);
        setLicznik(licznik + 1);
    };

    return (
        <div>
            <h1>Jesteś głupi(a)?</h1>
            <div className={licznik === 9 ? "niewidac" : "btn1"}>
                {btn1 && (
                    <button
                        onMouseEnter={handleBtn1}
                        onClick={() => setWynik("Oczywiscie ze nie jestes")}
                    >
                        Nie
                    </button>
                )}
            </div>
            <button
                className={licznik < 9 && styleTak}
                onClick={() => setWynik("Wiedziałem ze tak")}
            >
                Tak
            </button>
            <div className={style}>
                {btn2 && (
                    <button
                        onMouseEnter={handleBtn2}
                        onClick={() => setWynik("Oczywiscie ze nie jestes")}
                    >
                        Nie
                    </button>
                )}
            </div>

            <h1 className="pos">{wynik}</h1>
        </div>
    );
};

export default App;
