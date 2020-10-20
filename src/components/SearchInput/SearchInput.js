import React, {useState} from "react";
import classes from './SearchInput.module.css';

const SearchInput = props => {
    const [searchTerm, setSearchTerm] = useState('');

    const inputHandler = event => {
        setSearchTerm(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        if (searchTerm) {
            props.submitHandler(searchTerm);
        }
    }

    return (
        <section className={classes.search}>
            <div>
                <form onSubmit={submitHandler}>
                    <input autoFocus name="query" type="text" value={searchTerm} onChange={inputHandler}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    );
}

export default SearchInput;