import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/Components/Postcard/postCard'

function BlogPage() {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default BlogPage