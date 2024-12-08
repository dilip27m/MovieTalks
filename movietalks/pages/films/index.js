import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Movies.module.css'; 

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "d2bc73edeb149ddddfb9c2021a429224";

  useEffect(() => {
    // fetch the popular movies when page is loaded
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);  
      });
  }, [API_KEY]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.introtitle}>Movies</h1>
        <p className={styles.introText}>
          Browse through a list of movies.
        </p>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="search for movies"></input>
      </div>
      <div className={styles.container}> {/* movies container */}
        {
          movies.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <Link href={`/films/${movie.id}`}>
                <div>
                  <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}   className={styles.image} width={150} height={200} />
                  <h3 className={styles.title}>{movie.title}</h3>
                  <p className={styles.subdata}>{new Date(movie.release_date).getFullYear()}</p>
                  <p className={styles.subdata}>Rating: {movie.vote_average}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 Movietalks. All Rights Reserved. Under TFI kattubanisa members.</p>
      </footer>
    </div>
  );
};

export default MoviePage;
