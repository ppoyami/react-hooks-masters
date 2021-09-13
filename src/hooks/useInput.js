import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

export default function useInput(options) {
  const [value, setValue] = useState(options?.initialState || '');
  const errorMessage = useRef(new Map());

  if (options?.required && value.trim().length === 0) {
    errorMessage.current.set('required', '값을 입력해주세요.');
  } else {
    errorMessage.current.delete('required');
  }

  if (options?.minLength > value.length) {
    errorMessage.current.set(
      'minLength',
      `${options.minLength} 이상 입력해주세요.`
    );
  } else {
    errorMessage.current.delete('minLength');
  }

  if (options?.maxLength < value.length) {
    errorMessage.current.set(
      'maxLength',
      `${options.maxLength} 이하로 입력해주세요.`
    );
  } else {
    errorMessage.current.delete('maxLength');
  }

  const onChange = e => {
    setValue(e.target.value);
  };

  return [value, onChange, [...errorMessage.current.values()]];
}

useInput.defaultProps = {
  options: {
    initialState: '',
    required: false,
    minLength: 0,
    maxLength: 999,
  },
};

useInput.propTypes = {
  options: PropTypes.shape({
    initialState: PropTypes.string,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
  }),
};
