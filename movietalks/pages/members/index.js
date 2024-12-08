import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Members.module.css";

const MembersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.title}>Follow or connect to your vibe-matching TFI kattu banisa</h2>
        <p className={styles.subtitle}>Browse through the list of members and follow your favorite ones!</p>
      </div>
      <div className={styles.membersGrid}>
        <div className={styles.card}>
          <Link href="/members/member1">
            <div>
              <Image src="/images/p.jpg" alt="User Profile" width={100} height={100} />
              <p className={styles.name}>bharath</p>
              <button className={styles.button}>Follow</button>
            </div>
          </Link>
        </div>
<div className={styles.card}>{/* for member 2 */}
          <Link href="/members/member2">
            <div>
              <Image src="/images/p.jpg"   alt="User Profile" width={100} height={100} />
              <p className={styles.memberName}>manish</p>
              <button className={styles.button}>Follow</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
