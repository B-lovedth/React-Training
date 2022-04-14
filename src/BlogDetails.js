import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data, error, isPending } = useFetch( ' http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
        </div>
    )
}

export default BlogDetails
