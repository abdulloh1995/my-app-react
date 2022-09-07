import React, {useState, useRef, useMemo, useEffect} from "react";
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
import PostServiceApi from "./API/PostServiceApi";
import MyLoader from "./components/UI/loader/MyLoader";


function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    async function fetchPosts() {
        setIsLoading(true)
        const posts = await PostServiceApi.getAllPosts()
        setPosts(posts)
        setIsLoading(false)
    }

    return (
        <div className="app w-75 mx-auto">
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
            {isLoading
                ? <MyLoader/>
                : <TableList remove={removePost} posts={sortedAndSearchPosts} title="POSTS"/>

            }
        </div>
    );
}

export default App;
