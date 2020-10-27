import React, {useState} from 'react';
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchOutput from "./components/SearchOutput/SearchOutput";
import Footer from "./components/Footer/Footer";
import classes from './App.module.css';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const searchHandler = query => {
        console.log("[App]:  Doing an AJAX call for query='" + query + "'.");
        setInput(query);
        setOutput([]);
        fetch('http://cheetah.api.jointheleague.org/searchResults?q=' + query, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                const results = [];
                data.forEach(datum => {
                    results.push(datum)
                });
                setOutput(results);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <div>
                    <Header className="Level 7 Cheetah Search"/>
                </div>
            </header>
            <main>
                <SearchInput submitHandler={searchHandler}/>
                <SearchOutput term={input} results={output}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;