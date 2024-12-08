import Link from 'next/link';
import styles from '../../styles/Lists.module.css';

const ListsPage = () => {
  const lists = [
    {
      id: 1,
      name: 'Action Movies',
      description: 'A collection of action-packed movies.',
      creator: 'dilip',
      photo: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Romantic Movies',
      description: 'A collection of romantic films.',
      creator: 'bharath',
      photo: '/images/arjunreddy.jpg',
    },
    {
      id: 3,
      name: 'Sci-Fi Movies',
      description: 'A collection of mind-bending science fiction films.',
      creator: 'manish',
      photo: '/images/inception.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Curated Lists</h1>
      <p className={styles.subtitle}>Discover movie collections based on different genres created by our users.</p>
      <div className={styles.listContainer}>
        {lists.map((list) => (
          <div key={list.id} className={styles.card}>
            <img src={list.photo} alt={list.name} className={styles.image} />
            <div className={styles.cardContent}>
              <h2 className={styles.listName}>{list.name}</h2>
              <p className={styles.description}>{list.description}</p>
              <p className={styles.username}>Curated by: {list.creator}</p>
              <Link href={`/lists/${list.id}`} className={styles.link}>View List</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsPage;
