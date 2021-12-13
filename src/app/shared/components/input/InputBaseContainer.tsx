import React from 'react';

interface InputBaseProps {
  placeholder: string,
  content: string,
  setContent: (content: string) => void ,
}
const InputBase = ({
  placeholder,
  content,
  setContent,
}: InputBaseProps): JSX.Element => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  }
  
  return (
    <div>
      <input
        placeholder={placeholder}
        value={content}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBase;