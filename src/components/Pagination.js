import React from "react";

const Pagination = ({gotoNextPage, gotoPrevPage}) => {
    return (
        <div className="pagination-container">
            { gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button> }
            { gotoNextPage && <button onClick={gotoNextPage}>Next</button> }
        </div>
    );
}
 
export default Pagination;