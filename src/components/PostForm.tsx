import { useState, ChangeEvent } from 'react';

type Prop = {
  onAdd: (title: string, body: string) => void;
};

export const PostForm = ({ onAdd }: Prop) => {
  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  };

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  };

  const handleClick = () => {
    if (addTitleText && addBodyText) {
      onAdd(addTitleText, addBodyText);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <fieldset className="border-2 mb-3 p-5">
      <legend>Adicionar novo Posts</legend>
      <input
        value={addTitleText}
        onChange={handleAddTitleChange}
        className="block border p-3"
        type="text"
        placeholder="Digite um título"
      />
      <textarea
        value={addBodyText}
        onChange={handleAddBodyChange}
        className=" block border p-3"
      ></textarea>
      <button onClick={handleClick} className=" block border p-3">
        Adicionar
      </button>
    </fieldset>
  );
};
