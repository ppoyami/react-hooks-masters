import { useState } from 'react';

export default function useCheckList(checklist) {
  // * checklist를 상태로 전환
  const [list, setList] = useState(checklist);
  // * 한 아이템을 클릭 했을 때, 상태 배열을 바꾸어주는 함수
  const onClickItem = label => {
    setList(prev =>
      prev.map(item =>
        item.label === label ? { ...item, checked: !item.checked } : item
      )
    );
  };
  // 전체 아이템이 클릭된 상태인지 아닌지.
  const isAllChecked = list.reduce((acc, item) => item.checked && acc, true);
  // * 전체선택을 눌렀을 때 상태 배열을 바꾸어주는 함수
  const onClickAllItems = () => {
    setList(list.map(item => ({ ...item, checked: !isAllChecked })));
  };

  return [list, onClickItem, onClickAllItems, isAllChecked];
}
