import cn from 'classnames';
import ToggleButton from 'components/ToggleButton';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import { Button, Image } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  AndroidOutlined,
} from '@ant-design/icons';
import type { AppHeaderProps } from './AppHeader.type';
import { MENU_CONSTANTS } from './AppHeader.constants';
import logo from 'assets/images/logo.png';

import styles from './AppHeader.module.scss';

export default function AppHeader({
  activeMenuItem,
  historyPush,
  setSuperUser,
  isSuperUser,
}: AppHeaderProps) {
  return (
    <header className={styles.app_header}>
      <div className={styles.app_header__bar}>
        <Image
          src={logo}
          width={40}
          preview={false}
          style={{ marginLeft: 10 }}
        />
        <div className={styles.app_header__navigation}>
          <ToggleButtonGroup
            onChange={historyPush}
            value={activeMenuItem}
            isWithoutDivider
          >
            {MENU_CONSTANTS.map((el) => {
              if (!isSuperUser && !el.isUser) return <></>;
              return (
                <ToggleButton key={el.value} value={el.value}>
                  {el.label}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
      </div>

      <div className={styles.app_header__info}>
        <div className={styles.user}>
          <Button
            type={'text'}
            onClick={() => setSuperUser(!isSuperUser)}
            data-testid={'profileButton'}
          >
            {isSuperUser ? <AndroidOutlined /> : <UserOutlined />}
          </Button>
        </div>
        <div className={cn(styles.user, styles.user__logout)}>
          <Button data-testid={'logoutPopoverButton'} type={'text'}>
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    </header>
  );
}
