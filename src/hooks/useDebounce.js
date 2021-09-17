// setState 를 디바운스 적용
// state 가 변화할 때마다, useEffect에서 타이머 클리어 => 타이머 설정

import { useEffect, useState } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}
