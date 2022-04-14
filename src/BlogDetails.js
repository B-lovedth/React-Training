import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data:blog , error, isPending } = useFetch( ' http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details">
            {isPending && <div>{ error }</div>}
        </div>
    )
}

export default BlogDetails
