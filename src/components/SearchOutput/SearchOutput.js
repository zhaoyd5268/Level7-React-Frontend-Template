import React from "react";
import SearchResult from "./SearchResult/SearchResult";

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
                return (
                    <SearchResult
                        key={index}
                        title={result.title}
                        authors={result.authors}
                        link={result.link}
                    />
                );
                // return <li key={index}>
                //     <a href={result.link}>{result.title}</a>
                //     {result.authors &&
                //         result.authors.map((author, index) => (
                //         <p key={index}>{author}</p>
                //         ))
                //     }
                // </li>
            })
    }

    return (
        <div>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;