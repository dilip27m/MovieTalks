import Image from "next/image";
import Link from "next/link";
import styles from "../styles/profile.module.css";

const Profile = () => {
  const user = {
    username: "Dilip",
    photo: "/images/p.jpg",
    email: "dilipkumarredym2005@gmail.com",
    following: [
      { id: 1, username: "bharath", photo: "/images/p.jpg" },
      { id: 2, username: "manish", photo: "/images/p.jpg" },
    ],
    watchlist: [
      { title: "Bahubali 2", poster: "/images/bahubali.jpg", id: 1 },
      { title: "Titanic", poster: "/images/titanic.jpg", id: 2 },
    ],
    movies: [
      { title: "Agent Sai Srinivasa Athreya", review: "Great film!", poster: "/images/agent.jpg", rating: 5, id: 1 },
      { title: "Kalki", review: "Amazing visuals", poster: "/images/kalki.jpg", rating: 4, id: 2 },
    ],
    lists: [
      { title: "Sci-Fi Movies", description: "Best sci-fi movies of all time", poster: "/images/inception.jpg", id: 1 },
      { title: "Romantic Movies", description: "Top romantic films", poster: "/images/arjunreddy.jpg", id: 2 },
    ],
  };

  return (
    <div className={styles.container}>{/* details of user*/}
      <div className={styles.user}>
        <Image src={user.photo} alt="Profile Photo" className="rounded-full" width={96} height={96}/>
        <div>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      </div>
      <div>{/* members list user follows */}
        <h2 className={styles.sectionTitle}>Following</h2>
        <div className={styles.listContainer}>
          {
            user.following.map((member) => (
              <div key={member.id} className={styles.card}>
                <Link href={`/members/${member.username}`}>
                  <div>
                    <Image  src={member.photo} alt={`${member.username} profile`} width={40} height={40}/>
                    <p>{member.username}</p>
                  </div>
                </Link>
              </div>
            ))
           }
        </div>
      </div>
      <div> {/* Watchlater films */}
        <h2 className={styles.sectionTitle}>Watchlater</h2>
        <div className={styles.listsContainer}>
          {
            user.watchlist.map((movie) => (
              <div key={movie.id} className={styles.card1}>
                <Image  src={movie.poster} alt={movie.title} width={200} height={250}/>
                <h3>{movie.title}</h3>
              </div>
            ))
          }
        </div>
      </div>
      <div>{/* all the films which user reviewed*/}
        <h2 className={styles.sectionTitle}>Movies Reviewed</h2>
        <div className={styles.listsContainer}>
          {
            user.movies.map((movie) => (
              <div key={movie.id} className={styles.card1}>
                <Image  src={movie.poster} alt={movie.title} width={150} height={200}/>
                <h3>{movie.title}</h3>
                <p>{movie.review}</p>
                <p>
                  <p>Rating:</p> {movie.rating}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div> {/* lists created by user */}
        <h2 className={styles.sectionTitle}>Lists Created</h2>
        <div className={styles.listsContainer}>
          {
            user.lists.map((list) => (
              <div key={list.id} className={styles.card1}>
                <Link href={`/lists/${list.id}`}>
                  <div>
                    <Image  src={list.poster} alt={list.title} width={150} height={200}/>
                    <h3>{list.title}</h3>
                    <p>{list.description}</p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
