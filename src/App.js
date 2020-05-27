import React ,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Post from './Components/Posts'
import Pagination from './Components/Pagination'
function App() {
 
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false)
  const[currentPage,setCurrentPage]=useState(1)
  const [postsPerPage]=useState(8);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);

console.log(posts)


  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);


 const paginate =(pageNumber)=>{
   setCurrentPage(pageNumber)
 }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>

      <Post posts={currentPosts}  loading={loading} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length}  paginate={paginate} />
     
    </div>
  );
}

export default App;
