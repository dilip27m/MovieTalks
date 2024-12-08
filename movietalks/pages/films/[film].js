import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Movie.module.css';

const API_KEY = 'd2bc73edeb149ddddfb9c2021a429224'; 

const MoviePage = () => {
  const router = useRouter();
  const { film } = router.query; 
  const [filmInfo, setFilmInfo] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (film) {
      fetch(`https://api.themoviedb.org/3/movie/${film}?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((data) => setFilmInfo(data));
      fetch(`https://api.themoviedb.org/3/movie/${film}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
          const trailer = data.results.find((video) => video.type === 'Trailer');
          if (trailer) setTrailerKey(trailer.key);
        });
      fetch(`https://api.themoviedb.org/3/movie/${film}/credits?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((data) => setCast(data.cast.slice(0, 10)));
    }
  }, [film]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src={`https://image.tmdb.org/t/p/original/${filmInfo?.backdrop_path}`}
          alt={`${filmInfo?.title} Backdrop`} className={styles.backdropImage}/>
        <div className={styles.overlay}>
          <h1 className={styles.title}>{filmInfo?.title}</h1>
          <p className={styles.tagline}>{filmInfo?.tagline}</p>
        </div>
      </header>
      <div className={styles.mainContent}>
        <div className={styles.infoSection}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${filmInfo?.poster_path}`}
            alt={`${filmInfo?.title} Poster`}
            className={styles.filmImage}/>
          <div className={styles.details}>
            <p><strong>Release Date:</strong> {filmInfo?.release_date}</p>
            <p><strong>Genres:</strong> {filmInfo?.genres.map((genre) => genre.name).join(', ')}</p>
            <p><strong>Runtime:</strong> {filmInfo?.runtime} minutes</p>
            <p><strong>Rating:</strong> {filmInfo?.vote_average} / 10</p>
            <p><strong>Overview:</strong> {filmInfo?.overview}</p>
          </div>
          <div className={styles.userSection}>
            <button className={styles.button}><Link href={`#trailer`} className={styles.userfont}>Watch Trailer</Link></button>
            <div className={styles.line}><hr /></div>
            <button className={styles.button}><Link href={`#cast`} className={styles.userfont}>Cast</Link></button>
            <div className={styles.line}><hr /></div>
            <button className={styles.button}><Link href={`#rating`} className={styles.userfont}>Rate the Film</Link></button>
            <div className={styles.line}><hr /></div>
            <button className={styles.button}><Link href={`#reviews`} className={styles.userfont}>Review</Link></button>
            <div className={styles.line}><hr /></div>
            <button className={styles.button}><Link href="/watchlater" className={styles.userfont}>Add to Watchlist</Link></button>
            <div className={styles.line}><hr /></div>
            <button className={styles.button}><Link href="/lists" className={styles.userfont}>Add to list</Link></button>
          </div>
        </div>
        {trailerKey && (
          <div id="trailer" className={styles.trailerSection}>
            <h2>Watch Trailer</h2>
            <iframe
              className={styles.trailer}
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title={`${filmInfo?.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div id="cast" className={styles.castSection}>
          <h2>Cast</h2>
          <div className={styles.castList}>
            {cast.map((member) => (
              <div key={member.id} className={styles.castMember}>
                <img
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${member.profile_path}`
                      : '/no-image.jpg'
                  }
                  alt={member.name} className={styles.castImage} />
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="rating" className={styles.rating}>
          <label className={styles.ratingLabel}>Rating</label>
          <input type="number" placeholder="Rate between 1 to 10" min={1} max={10} className={styles.ratingInput}></input>
        </div>
        <div id="reviews">
          <label className={styles.ratingLabel}>Review</label>
          <textarea
            className={styles.textarea} placeholder="Write your review..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
