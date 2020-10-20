import React from "react";

const SearchOutput = (props) => {
    let message = null;
    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <p>Searching for "{props.term}" ...</p>;
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((result, index) => {
                return <li key={index}>
                    <a href={result.link}>{result.title}</a>
                    {result.authors &&
                        result.authors.map((author, index) => (
                        <p key={index}>{author}</p>
                        ))
                    }
                </li>
            })
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