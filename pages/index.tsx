import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className={styles.container}>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      Not signed in <br />
      <button onClick={() => signIn('keycloak')}>Sign in</button>
    </div>
  );
}
