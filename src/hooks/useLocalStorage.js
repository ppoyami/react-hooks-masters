import { useCallback, useState } from 'react';

export default function useLocalStorage(key = '', initialValue = '') {
  // 로컬스토리지의 값이나, 초기 값 인자로 상태를 정의한다.(컴포넌트가 마운트 할 때)
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      console.log(item);

      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });
  // 로컬스토리지와 상태 값을 변경하는 함수를 제공한다.
  const setLocalStorage = useCallback(
    value => {
      const newState = typeof value === 'function' ? value(state) : value;
      try {
        setState(newState);
        window.localStorage.setItem(key, JSON.stringify(newState));
      } catch (e) {
        console.error(`Unable to store new value for ${key} in localStorage.`);
      }
    },
    [key, state]
  );

  return [state, setLocalStorage];
}
