import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppHeader from 'components/AppHeader';

export default function AppHeaderContainer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    setActiveMenuItem(location.pathname.split('/')[1]);
  }, [location.pathname]);

  const historyPush = (value: string) => {
    navigate(`/${value}`);
  };

  return (
    <AppHeader activeMenuItem={activeMenuItem} historyPush={historyPush} />
  );
}
