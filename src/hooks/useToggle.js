import { useState } from 'react';

export default function useToggle() {
  const [value, setValue] = useState(false);

  const onToggle = value => {
    setValue(prev => (typeof value === 'boolean' ? value : !prev));
  };

  return [value, onToggle];
}
