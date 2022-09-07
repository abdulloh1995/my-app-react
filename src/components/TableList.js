import React from 'react';
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TableList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <h6 className="text-center text-danger">POST NOT FOUND</h6>
    }

    return (<>
        <h4 className="text-center">{title}</h4>
        <TransitionGroup>
            {posts.map((post, index) => (
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <TableItem remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
        {/*<table className="table table-striped">*/}
        {/*    <TableHeader/>*/}
        {/*    <tbody>*/}
        {/*    <TransitionGroup>*/}
        {/*        {posts.map((post, index) => (*/}
        {/*            <CSSTransition*/}
        {/*                key={post.id}*/}
        {/*                timeout={500}*/}
        {/*                className="item"*/}
        {/*            >*/}
        {/*                <TableItem remove={remove} number={index + 1} post={post}/>*/}
        {/*            </CSSTransition>*/}
        {/*        ))}*/}
        {/*    </TransitionGroup>*/}
        {/*    </tbody>*/}
        {/*</table>*/}
    </>);
};

export default TableList;