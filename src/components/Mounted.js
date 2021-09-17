import useIsMounted from '@/hooks/useIsMounted';
import { useEffect, useState } from 'react';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const Child = () => {
  const [data, setData] = useState('loading');
  const isMounted = useIsMounted();

  // 언마운트 된 컴포넌트의 상태를 변경할 수 없음 -> 마운트 상태를 체크해야 한다.
  useEffect(() => {
    delay(3000).then(() => {
      if (isMounted()) {
        setData('ok');
      }
    });
  }, [isMounted]);

  return <p>{data}</p>;
};

export default function Parent() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(prev => !prev);
  return (
    <div>
      <button
        className="bg-green-300 py-3 px-5 rounded-sm"
        onClick={toggleVisibility}
      >
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <Child />}
    </div>
  );
}
