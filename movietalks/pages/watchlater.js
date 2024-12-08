import styles from '../styles/Watchlater.module.css';
const WatchlaterPage = () => {
  // this is just a static as we havent created a dtabase and backend to handle this 
  const watchlater = [
    { title: "Bahubali 2", poster: "/images/bahubali.jpg", id: 1 },
    { title: "Titanic", poster: "/images/titanic.jpg", id: 2 },
  ];
  return (
    <div className={styles.container}>
      <h1>Watchlater</h1>
        <div className={styles.listContainer}>
          {watchlater.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img src={movie.poster} alt={movie.title} className={styles.image} />
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          ))}
        </div>
    </div>
  );
};
export default WatchlaterPage;
