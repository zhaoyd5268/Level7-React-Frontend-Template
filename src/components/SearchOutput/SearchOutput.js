import React from "react";

const SearchOutput = (props) => {
    let message = null;
    if (props.term) {
        message = <p>Searching for "{props.term}" ...</p>;
    }

    let searchResults = null;
    if (props.results) {
        searchResults = (
            props.results.map(result => (
                <li key={result.id}><a href={result.userId}>{result.title}</a>: {result.body} : </li>
            ))
        );
    }

    return (
        <div>
            {message}
            <ul>
                {searchResults}
            </ul>
        </div>
    )
}

export default SearchOutput;