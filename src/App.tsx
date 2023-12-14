import { useState } from 'react';
import Router from 'routes/Router';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import styles from './App.module.scss';

function App() {
  const [isSuperUser, setSuperUser] = useState(true);
  const audios = [];
  for (let i = 1; i <= 3; ++i) {
    audios.push(
      <audio controls src={`audio/${i}.mp3`}>
        <a href={`audio/${i}.mp3`}> Скачать </a>
      </audio>,
    );
  }
  return (
    <div className={styles.app}>
      <AppHeaderContainer
        setSuperUser={setSuperUser}
        isSuperUser={isSuperUser}
      />
      <main>
        <Router isSuperUser={isSuperUser} />
      </main>
      <aside>{audios}</aside>
      <footer>
        © {new Date().getFullYear()} ООО «Карго транс». Все права защищены.
      </footer>
    </div>
  );
}

export default App;
