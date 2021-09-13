import useCheckList from '@/hooks/useCheckList';

const mock = [
  { label: '약관동의 1', checked: false },
  { label: '약관동의 2', checked: false },
  { label: '약관동의 3', checked: false },
];

export default function CheckList() {
  const [list, onClickItem, onClickAllItems, isAllChecked] = useCheckList(mock);
  console.log(list);

  return (
    <div>
      <div className="mb-3">
        <label>전체 체크하기</label>
        <input
          onChange={onClickAllItems}
          type="checkbox"
          checked={isAllChecked}
        />
      </div>
      <div className="flex flex-col">
        {list.map(({ label, checked }) => (
          <div className="mb-1" key={label}>
            <label>{label}</label>
            <input
              onChange={() => onClickItem(label)}
              type="checkbox"
              checked={checked}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
