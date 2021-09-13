import { ReactComponent as Icon } from 'assets/chevron-down.svg';
import useDropdown from '@/hooks/useDropdown';

export default function Dropdown() {
  const [dropdownContainer, value, open, onClickDropdown, onClickItem] =
    useDropdown();
  return (
    <div ref={dropdownContainer} onClick={onClickDropdown}>
      <div>
        <h1>{value}</h1>
        <Icon />
      </div>
      <ul className={open ? 'block' : 'hidden'}>
        {Array.from({ length: 5 }, (v, k) => k).map(v => (
          <li key={v} value={v} onClick={onClickItem}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
