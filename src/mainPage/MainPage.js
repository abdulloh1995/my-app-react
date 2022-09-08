import React, {useState, useEffect} from "react";
import "../style/style.css"
import TableList from "../components/TableList";
import PostForms from "../components/PostForms";
import FilterAndSearch from "../components/FilterAndSearch";
import MyModal from "../components/UI/modal/MyModal";
import {usePosts} from "../hooks/useCreatePost";
import PostServiceApi from "../API/PostServiceApi";
import MyLoader from "../components/UI/loader/MyLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageArray, getPageCount} from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";


function MainPage() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostServiceApi.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
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
            {postError && <p>Error</p>}
            {isLoading
                ? <MyLoader/>
                : <TableList remove={removePost} posts={sortedAndSearchPosts} title="POSTS"/>
            }
            <MyPagination page={page} changePage={changePage} totalPage={totalPage}/>
        </div>
    );
}

export default MainPage;
