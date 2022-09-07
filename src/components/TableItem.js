import React from 'react';
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
    return (
        <div className="d-flex justify-content-between border my-2 p-3 align-items-center">
            <div>
            <span>{props.number}.
                <b> {props.post.title}</b>
            </span>
                <p className="lead">{props.post.body}</p>
            </div>
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