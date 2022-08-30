function RatingSelect({ select, selected }) {
  const handleChange = (e) => {
    //change string to number with +
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
        <li key={num}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={num}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}
export default RatingSelect;
