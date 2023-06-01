function Input({type = 'text'}) {
  return (
    <li>
      <label htmlFor={type}>{type}</label>
      <input type="text" name={type} />
    </li>
  );
}

export default Input;
