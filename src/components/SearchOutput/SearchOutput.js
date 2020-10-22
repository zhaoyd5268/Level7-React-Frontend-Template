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