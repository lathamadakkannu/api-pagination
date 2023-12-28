//import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import CardList from './CardList';
import Pagination from './Pagination';
import React, {useEffect,useState} from 'react'


function App() {

  const[Data,setData]=useState([])
  const[currentPage,setCurrentPage]=useState(1)
  const[PostperPage]=useState(6)

  useEffect(()=>{
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>{

    setData(res.data)
    console.log(res.data);
    })
    
  },[])

  //.catch((err)=>console.log(err);)

  const lastPostIndex=currentPage*PostperPage
  const firstPostIndex=lastPostIndex-PostperPage
  const currentPosts=Data.slice(firstPostIndex,lastPostIndex)
 
  return (
    <div className="App">
    <CardList Data={currentPosts}/>
    
    <Pagination
    totalPosts={Data.length}
    PostperPage={PostperPage}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    />
    
     
    </div>
  );
}

export default App;
