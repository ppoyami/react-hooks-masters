import useLocalStorage from '@/hooks/useLocalStorage';

export default function SaveCheckbox() {
  const [list, setLocalStorage] = useLocalStorage('checklist', [
    { label: '아이디 저장', checked: false },
  ]);
  const onCheckItem = label => {
    return prevState =>
      prevState.map(item =>
        item.label === label ? { ...item, checked: !item.checked } : item
      );
  };

  console.log(list);

  return (
    <div>
      {list.map(item => (
        <div key={item.label}>
          <label>{item.label}</label>
          <input
            type="checkbox"
            onChange={() => setLocalStorage(onCheckItem(item.label))}
            checked={item.checked}
          />
          <span className="block text-sm text-red-500">
            {item.checked
              ? '아이디를 저장하였습니다.'
              : '아이디가 저장되지 않았습니다.'}
          </span>
        </div>
      ))}
    </div>
  );
}
