import { useRouter } from 'next/router';
import styles from '../../styles/List.module.css';


const lists = [
  { 
    id: 1, 
    name: 'Action Movies', 
    description: 'A collection of action-packed movies that will keep you on the edge of your seat.',
    items: [
      { title: 'Avengers Infinity war', description: 'An iconic action movie starring Bruce banner.', poster: '/images/infinitywar.jpg', rating: 4.5 },
      { title: 'Kalki 2898-AD', description: 'When the world is taken over by darkness, a new force will arise.', poster: '/images/kalki.jpg', rating: 4.7 },
      { title: 'John Wick', description: 'Keanu Reeves stars as a retired hitman seeking vengeance.', poster: '/images/johnwick.jpg', rating: 4.8 },
    ], 
    creator: 'dilip' 
  },
  { 
    id: 2, 
    name: 'Romantic Movies', 
    description: 'A collection of heartwarming and emotional love stories.',
    items: [
      { title: 'Sita Ramam', description: 'A love story written with war.', poster: '/images/sitaramam.jpg', rating: 4.6 },
      { title: 'Titanic', description: 'A passionate love story set aboard the doomed RMS Titanic.', poster: '/images/titanic.jpg', rating: 4.8 },
      { title: 'Arjun Reddy', description: 'When his girlfriend is forced to marry another man, a troubled young surgeon begins to self-destruct.', poster: '/images/arjunreddy.jpg', rating: 4.5 },
    ], 
    creator: 'bharath' 
  },
  { 
    id: 3, 
    name: 'Sci-Fi Movies', 
    description: 'A collection of mind-bending science fiction films.',
    items: [
      { title: 'Agent Sai Srinivasa Athreya', description: 'Sherlock Holmes is Fiction , Agent Sai Srinivasa Athreya is Original', poster: '/images/agent.jpg', rating: 4.4 },
      { title: 'Inception', description: 'Your mind is the scene of the crime.', poster: '/images/inception.jpg', rating: 4.7 },
      { title: 'Interstellar', description: 'Mankind was born on Earth. It was never meant to die here.', poster: '/images/interstaller.jpg', rating: 4.3 },
    ], 
    creator: 'manish' 
  },
];

const ListPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const list = lists.find(list => list.id.toString() === id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{list.name}</h1>
      <p className={styles.description}>{list.description}</p>
      <p className={styles.creator}>Curated by: {list.creator}</p>
      <div className={styles.filmCards}>
        <h2>Curated Movies:</h2>
        <div className={styles.cardContainer}>
          {list.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.poster} alt={item.title} className={styles.image} />
              <h3 className={styles.movieTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.rating}>Rating: {item.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
