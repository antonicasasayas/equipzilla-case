import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Feed = ({ result }) => {
  return (
    <div>
      {result.slice(0, 10).map((tweet) => (
        <div className={styles.tweetContainer} key={tweet.id}>
          <div className={styles.imageContainer}>
            <Image
              src={tweet.user.profile_image_url}
              width={50}
              height={50}
              alt="user-photo"
            />
          </div>

          <div>
            <h4>{tweet.user.name}</h4>
            <p>{tweet.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
