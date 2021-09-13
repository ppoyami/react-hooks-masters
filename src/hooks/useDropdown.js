const { useState, useRef, useEffect } = require('react');

export default function useDropdown(intialValue = '') {
  const [value, setValue] = useState(intialValue);
  const [open, setOpen] = useState(false);
  const dropdownContainer = useRef(null);

  //* toggle
  const onClickDropdown = e => {
    console.log(e.target);
    setOpen(prev => !prev);
  };

  //* item click
  const onClickItem = e => {
    setValue(e.target.value);
  };

  //* body useEffect
  useEffect(() => {
    const onClose = e => {
      if (dropdownContainer.current?.contains(e.target)) return;
      setOpen(false);
    };
    const body = document.querySelector('body');
    body.addEventListener('click', onClose);

    return () => {
      body.removeEventListener('click', onClose);
    };
  }, []);

  return [dropdownContainer, value, open, onClickDropdown, onClickItem];
}
