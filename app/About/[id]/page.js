import Link from 'next/link';
import React, { use } from 'react'
async function getPost(id){
      let post  = await fetch(`https://dummyjson.com/posts/${id}`)
      return post.json()
}
function Page({params}) {
      let id = params.id;
      let post = use(getPost(id))
  return (
      <>
       <div>{post.id}</div>
       <div>{post.title}</div>
       <Link href="/About">About</Link>
      </>
   
  )
}

export default Page;