import Link from 'next/link';
import React from 'react'

import { use } from 'react';
 async function getPosts(){
      let posts = await fetch("https://dummyjson.com/posts?limit=6");
      return  posts.json()
 }
function About() {
      let {posts} = use(getPosts())
  return (
    <div>
      
      {posts.map((post) =>(
      <li key={post.id}>
      <Link href={`/About/${post.id}`} >
        <li><a>{post.title} </a>
          </li>
      </Link>
       </li>
      
    ))}
    
    </div>
  )
}

export default About;