"use client";

import { Metadata } from "next"
import Link from "next/link";
import { useEffect, useState } from "react";

// async function getData(){
//   const response = await fetch('https://jsonplaceholder.org/posts', {
//     next: {
//       revalidate: 60
//     }
//   });

//   if(!response.ok) throw new Error("Unableto fetch")

//   return response.json();
// }

// export const metadata: Metadata = {
//   title: 'Blog | Next App',
// }

// eslint-disable-next-line @next/next/no-async-client-component
export default function Blog() {

  const [posts, setPosts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [])

  return (
    <div className="containerBlog">
    <div >Blog page</div>
    <ul className="blogPage">
      {posts.map((post: any) => (
      <li className="li" key={post.id}>
        <Link className="linkBlog" href={`/blog/${post.id}`}>{post.title}</Link>
      </li>
      ))}
    </ul>
    </div>
    
  )
}
