import React from 'react';
import MyButton from "../button/MyButton";
import {getPageArray} from "../../../utils/pages";

const MyPagination = ({totalPage, page, changePage}) => {
    const pageArray = getPageArray(totalPage)

    return (
        <>
            {pageArray.map(item => (
                <MyButton
                    key={item}
                    onClick={() => changePage(item)}
                    className={page === item ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
                >
                    {item}
                </MyButton>
            ))}
        </>

    );
};

export default MyPagination;