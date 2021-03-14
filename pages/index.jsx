import Head from 'next/head';
import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora de Calorias</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );
};

export default Home;
