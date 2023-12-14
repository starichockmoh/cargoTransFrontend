export interface AppHeaderProps {
  activeMenuItem: string;
  historyPush: (value: string) => void;
  isSuperUser: boolean;
  setSuperUser: (isSuper: boolean) => void;
}
