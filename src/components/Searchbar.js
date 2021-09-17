import useDebounce from '@/hooks/useDebounce';
import { useState } from 'react';

export default function Searchbar() {
  const [value, setValue] = useState('');
  const debouncedState = useDebounce(value);

  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>
        디바운스가 적용된 상태 변경{' '}
        <span className="text-lg text-red-500">{debouncedState}</span>
      </p>
      <input
        {...{ value, onChange }}
        className="p-2 w-full rounded-md border-2 focus:outline-none text-black"
      />
    </div>
  );
}
