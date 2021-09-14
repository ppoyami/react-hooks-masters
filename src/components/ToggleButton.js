import useToggle from '@/hooks/useToggle';

import { ReactComponent as Moon } from 'assets/moon.svg';
import { ReactComponent as Sun } from 'assets/sun.svg';

export default function ToggleButton() {
  const [value, onToggle] = useToggle();
  return <button onClick={onToggle}>{value ? <Moon /> : <Sun />}</button>;
}
