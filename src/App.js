import React, {useState} from "react";
import "./style/style.css"
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: "JavaScript", stack: "MERN stack"},
      {id: 2, title: "Python", stack: "Full-stack"},
      {id: 3, title: "Kotlin", stack: "Android"},
      {id: 4, title: "VueJs", stack: "Front end"},
      ]
  )

  return (
    <div className="app w-50 mx-auto">
        <form>
            <h5 className="text-center">Create post</h5>
            <MyInput
                type="text"
                className="form-control"
                placeholder="Programming language"
            />
            <MyInput
                type="text"
                className="form-control my-3"
                placeholder="Enter stack"
            />
            <MyButton className="btn btn-primary w-100">+Add post</MyButton>
        </form>
        <TableList posts={posts} title="Programming Language"/>
    </div>
  );
}

export default App;
