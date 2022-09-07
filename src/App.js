import React, {useState, useRef, useMemo} from "react";
import "./style/style.css"
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForms from "./components/PostForms";
import MySelect from "./components/UI/select/MySelect";
import postForms from "./components/PostForms";
import FilterAndSearch from "./components/FilterAndSearch";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/useCreatePost";


function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: "JavaScript", stack: "MERN stack"},
            {id: 2, title: "Python", stack: "Full-stack"},
            {id: 3, title: "Kotlin", stack: "Android"},
            {id: 4, title: "VueJs", stack: "Front end"},
        ]
    )

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    return (
        <div className="app w-50 mx-auto">
            <button
                className="btn btn-success align-items-end"
                onClick={() => setModal(true)}
            >
                Add Post
            </button>
            <MyModal modal={modal} setModal={setModal}>
                <PostForms createPost={createPost}/>
            </MyModal>
            <FilterAndSearch filter={filter} setFilter={setFilter}/>
            {sortedAndSearchPosts.length
                ? <TableList remove={removePost} posts={sortedAndSearchPosts} title="Programming Language"/>
                : <h6 className="text-danger text-center mt-3">Not found</h6>
            }
        </div>
    );
}

export default App;
