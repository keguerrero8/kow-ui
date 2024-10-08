import Link from 'next/link'
import Image from 'next/image'

import styles from "./HomePageCards.module.css"

const BlogCard = ({ title, subtitle, image, postId }) => {
  return (
    <div className={styles.blogCard}>
      <Link href={`/blog/${postId}`}>
        <Image src={image} alt='blog cover photo'/>
      </Link>
      <Link href={`/blog/${postId}`}>
        <h3>{title}</h3>
      </Link>
      <p>{subtitle}</p>
    </div>
  );
};

export default BlogCard;