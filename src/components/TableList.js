import React from 'react';
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const TableList = ({posts, title}) => {
    return (
        <>
            <h4 className="text-center">{title}</h4>
            <table className="table table-striped">
                <TableHeader/>
                <tbody>
                {posts.map(post => (
                    <TableItem post={post} key={post.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default TableList;