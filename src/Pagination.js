import React from "react";

function Pagination({totalPosts,PostperPage,setCurrentPage,currentPage}){

    let pages=[];
    for(let i=1; i<=Math.ceil(totalPosts/PostperPage);i++)
    pages.push(i)

    return(
        <div className="pagination-btn"> 
            {
                pages.map((page,index)=>{
                    return(
                        <button
                        key={index}
                        id="btn-style"
                        className={page===currentPage?"active":""}
                        onClick={()=>setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default Pagination;
