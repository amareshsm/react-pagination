import React from 'react'

const Pagination =({postPerPage,totalPosts,paginate}) =>{

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i);
    }

    return (<div>
        <nav>
            <ul className="pagination">
                {pageNumbers.map(pages =>(
                    <li key={pages} className="page-item">
                        <a onClick={()=> paginate(pages)} href='!#' className='page-link'>
                        {pages}
                        </a>
                       </li>
                ))}
            </ul>
        </nav>
    </div>)
}

export default Pagination;