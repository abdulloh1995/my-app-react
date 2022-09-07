import React from 'react';
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
    return (
        <div className="d-flex justify-content-between border-bottom p-2">
            <p>{props.number}</p>
            <p>{props.post.title}</p>
            <p>{props.post.stack}</p>
            <p>
                <MyButton
                    onClick={() => props.remove(props.post)}
                    className="btn btn-outline-danger"
                >
                    delete
                </MyButton>
            </p>
        </div>
    );
};

export default TableItem;