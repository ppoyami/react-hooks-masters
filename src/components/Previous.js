import useInput from '@/hooks/useInput';
import usePrevious from '@/hooks/usePrevious';

export default function Previous() {
  const [value, onChange, errorMessages] = useInput({
    initialState: '',
    minLength: 3,
    maxLength: 8,
    required: true,
  });
  const prev = usePrevious(value);

  return (
    <div className="absolute-center">
      <h3>prev value:{prev}</h3>
      <h3>current value:{value}</h3>
      <input
        className="text-black outline-none border-gray-300 rounded-sm p-2 w-full"
        value={value}
        onChange={onChange}
      />
      {errorMessages.map(message => (
        <span className="text-sm text-red-500 block" key={message}>
          {message}
        </span>
      ))}
    </div>
  );
}
