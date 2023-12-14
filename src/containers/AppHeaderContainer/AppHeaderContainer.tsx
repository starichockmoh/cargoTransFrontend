import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppHeader from 'components/AppHeader';
import { AppHeaderContainerProps } from 'containers/AppHeaderContainer/AppHeaderContainer.type';

export default function AppHeaderContainer({
  setSuperUser,
  isSuperUser,
}: AppHeaderContainerProps) {
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
    <AppHeader
      activeMenuItem={activeMenuItem}
      historyPush={historyPush}
      isSuperUser={isSuperUser}
      setSuperUser={setSuperUser}
    />
  );
}
