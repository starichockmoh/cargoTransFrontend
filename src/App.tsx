import styles from './App.module.scss';
import Router from 'routes/Router';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/vehicles');
  }, []);
  const postCat = () => {
    axios.post('http://localhost:3000/vehicles', {
      model: 'Lada',
      car_number: 'xxxx111xxxt',
      date_of_manufacture: new Date().toISOString(),
      lifting_capacity: 23.4,
      group_id: 1,
    });
  };

  const updateCat = () => {
    axios.put('http://localhost:3000/vehicles/1', {
      model: 'Lada',
      car_number: 'xxxx111xxx',
      date_of_manufacture: new Date().toISOString(),
      lifting_capacity: 23.4,
      group_id: 1,
      id: 1,
    });
  };
  const getCat = () => {
    axios.get('http://localhost:3000/vehicles/1');
  };

  const deleteCat = () => {
    axios.delete('http://localhost:3000/vehicles/10');
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
