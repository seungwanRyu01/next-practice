import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({posts}) {

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async() => {
//   const res = await fetch('http://localhost:8080/api/posts');
//   // res을 json형태로 반환해서 posts 변수에 저장
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  // res을 json형태로 반환해서 posts 변수에 저장
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
};
