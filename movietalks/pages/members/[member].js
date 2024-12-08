import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Member.module.css";

const MemberPage = () => {
  const router = useRouter();
  const { member } = router.query; 
  const [memberdata, setMemberdata] = useState(null);
  useEffect(() => {
    if (member) {
      const fetchMemberdata = async () => {
        const memberInfo = {
          username:"bharath",
          profilePhoto: "/images/p.jpg", 
          lists: [
            {
              id: 1,
              title: "Action Movies",
              description: "A collection of thrilling action movies.",
              poster: "/images/kalki.jpg",
            },
            {
              id: 2,
              title: "Romantic Movies",
              description: "A list of sweet romantic movies.",
              poster: "/images/sitaramam.jpg",
            },
          ],
          filmsReviewed: [
            { id: 1, title: "Infinity War", review: "Great movie!", poster: "/images/infinitywar.jpg" },
            { id: 2, title: "Arjun Reddy", review: "Excellent movie", poster: "/images/arjunreddy.jpg" },
          ],
        };
        setMemberdata(memberInfo);
      };
      fetchMemberdata();
    }
  }, [member]);
  if (!memberdata) {
    return <p>Member not found</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={memberdata.profilePhoto}  alt={`${memberdata.username}'s Profile`}  width={100}  height={100} />
        <h1>{memberdata.username}</h1>
      </div>
      <button className={styles.button}>Follow</button>
    {/* lists that user created */}
      <div className={styles.listsContainer}>
        <h2 className={styles.sectionTitle}>Lists Created</h2>
        {memberdata.lists.map((list) => (
          <div key={list.id} className={styles.card}>
            <Image  src={list.poster}  alt={list.title}  width={150} height={200}  className={styles.listPoster} />
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.listsContainer}>        {/* movies which we gave review */}
        <h2 className={styles.sectionTitle}>Movies Reviewed</h2>
        {memberdata.filmsReviewed.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <Image src={movie.poster}  alt={movie.title} width={150} height={200} />
            <h3>{movie.title}</h3>
            <p>{movie.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
