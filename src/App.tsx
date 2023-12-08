import styles from './App.module.scss';
import Router from 'routes/Router';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/cargoes');
  }, []);
  const postCat = () => {
    axios.post('http://localhost:3000/cargoes', {
      name: 'Груз 200',
      weight: 200,
      type_id: 1,
      request_id: 1,
      client_id: 1,
    });
  };

  const updateCat = () => {
    axios.put('http://localhost:3000/cargoes/1', {
      name: 'Груз 300',
      weight: 300,
      type_id: 1,
      request_id: 1,
      client_id: 1,
      id: 1
    });
  };
  const getCat = () => {
    axios.get('http://localhost:3000/cargoes/1');
  };

  const deleteCat = () => {
    axios.delete('http://localhost:3000/cargoes/2');
  };

  return (
    <div className={styles.app}>
      <AppHeaderContainer />
      <main>
        <Button onClick={postCat}>Add Cat</Button>
        <Button onClick={getCat}>Get Cat</Button>
        <Button onClick={updateCat}>Update Cat</Button>
        <Button onClick={deleteCat}>Delete Cat</Button>
        <Router />
      </main>
      <aside>BBB</aside>
      <footer>
        © {new Date().getFullYear()} ООО «Карго транс». Все права защищены.
      </footer>
    </div>
  );
}

export default App;
