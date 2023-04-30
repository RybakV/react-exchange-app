import './Converter.css';
import Hero from '../section-hero/Hero';
import arrow from "../images/icon-arrow-grey-right.svg";
import exchange from "../images/icon-exchange.svg";
import {useState} from "react";

function Converter() {

    // Redux stuff
    let historyData = [
        {
            'date': '2023-04-25',
            'from': '1200',
            'fromCurrency': 'UAH',
            'to': '40',
            'toCurrency': 'UAH',
        },
    ];

    // Date restriction
    function dateToString(days){
        let dateToday = new Date();
        dateToday.setDate(dateToday.getDate() + days);
        let month = dateToday.getMonth() + 1;
        let day = dateToday.getDate();
        let year = dateToday.getFullYear();
        if(month < 10) {
            month = '0' + month.toString();}
        if(day < 10) {
            day = '0' + day.toString();}
        const dateReturn = year + '-' + month + '-' + day;
        return dateReturn;
    }
    const minDate = dateToString(-7);
    const maxDate = dateToString(0);

    // CONVERTER LOGIC
    const fromInputValue = 0;
    const toInputValue = 0;

    const exchangeRate = {
        'UAH': {'EUR':0.024,'UAH':1,'USD':0.027,},
        'USD': {'EUR':0.90,'UAH':36.96,'USD':1,},
        'EUR': {'EUR':1,'UAH':40.99,'USD':1.11,},
    }
    // ADD NBU API
    function updateOtherInput(changedInput, changedSelect, targeTinput, targeSelect){
        targeTinput.value = (changedInput.value * exchangeRate[changedSelect.value][targeSelect.value]).toFixed(2);
    }

    function calculateExchange(event){
        const fromInput = document.querySelector('#from');
        const toInput = document.querySelector('#to');
        const fromSelect = document.querySelector('#from-currency');
        const toSelect = document.querySelector('#to-currency');

        const target = event.target;
        //console.log(target, fromInput, target === fromInput);
        if(target === fromInput || target === fromSelect) {
            updateOtherInput(fromInput, fromSelect, toInput, toSelect);
        }
        else if(target === toInput || target === toSelect) {
            updateOtherInput(toInput, toSelect, fromInput, fromSelect);
        }
    }

    // Const for debounce - working
    const debouncedOnChange = debounce(calculateExchange, 500);

    // Function for debounce - not working
    // function debouncedOnChange() {
    //     debounce(calculateExchange, 500);
    // }

    // Debounce
    function debounce(func, wait){
        let debounceTimer
        return function() {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer
                = setTimeout(() => func.apply(context, args), wait)
        }
    }

    // HISTORY

    const [history, setHistory] = useState(historyData);

    function submitExchange(event){
        event.preventDefault();

        const fromInput = document.querySelector('#from');
        const toInput = document.querySelector('#to');
        const fromSelect = document.querySelector('#from-currency');
        const toSelect = document.querySelector('#to-currency');
        const calendar = document.querySelector('#calendar');

        if (calendar.value && fromInput.value > 0) {
            const exchangeData = {}
            exchangeData.date = calendar.value;
            exchangeData.from = fromInput.value;
            exchangeData.to = toInput.value;
            exchangeData.fromCurrency = fromSelect.value;
            exchangeData.toCurrency = toSelect.value;

            setHistory([exchangeData, ...history.slice(0, 9)]);
        }
        else {
            alert('Enter date')
        }
    }

    function clearHistory(){
        console.log('Clear history')
        setHistory([]);
    }

    return (
        <>
            <Hero/>
            <section className="converter">
                <div className="container">
                    <div className="converter--box">
                        <h1 className="converter--title">Конвертер валют</h1>
                        <form onChange={debouncedOnChange} className="converter--form">
                            <div className="converter--form-top">
                                <div className="converter--from">
                                    В мене є:
                                    <div className="converter--fieldset">
                                        <input id="from" defaultValue={fromInputValue} className="converter--input" type="number" placeholder="Ви віддаєте" min="0"/>
                                        <select id="from-currency" className="converter--select" >
                                            <option>UAH</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="converter--arrows">
                                    <img src={exchange} className="converter--arrows-icon" alt="<- ->"/>
                                </div>
                                <div className="converter--to">
                                    Хочу придбати:
                                    <div className="converter--fieldset">
                                        <input id="to" defaultValue={toInputValue} className="converter--input" type="number" placeholder="Ви отримуєте" min="0"/>
                                        <select id="to-currency" className="converter--select" >
                                            <option>UAH</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="converter--footer">
                                <div className="converter--calendar">
                                    <input id="calendar" defaultValue={maxDate} className="converter--input" type="date" placeholder="Дата" min={minDate} max={maxDate}/>
                                </div>
                                <div className="converter--submit">
                                    <button onClick={submitExchange} className="converter--btn btn">Зберегти результат</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
            <section className="history">
                <div className="container">
                    <div className="history--box">
                        <div className="history--header">
                            <h1 className="history--title">Історія конвертації</h1>
                            <button onClick={clearHistory} className="history--clear">Очистити історію</button>
                        </div>
                        <div className="history--items">
                            {history.map((item, index) => (
                                <div key={index} className="history--item">
                                    <div className="history--item-date">
                                        {item.date}
                                    </div>
                                    <div className="history--item-from">
                                        {item.from} {item.fromCurrency}
                                    </div>
                                    <img src={arrow} className="history--item-arrow" alt="->" />
                                    <div className="history--item-to">
                                        {item.to} {item.toCurrency}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Converter;