import { Metadata } from "next";

async function getData(id: string){
  const response = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });

  return response.json();
}

type Props ={
    params: {
        id: string;
    }
} 

export async function generateMetadata({params: {id}}: Props): Promise<Metadata>{

  const posts = await getData(id);

  return{
    title: posts.title,
  }
}
export default async function Post({params: {id}}:Props) {

  const posts = await getData(id);



  return (
    <div className="postId">
        <h1>{ posts.title }</h1>
        <p>{posts.content}</p>
    </div>
  )
}
