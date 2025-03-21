export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((items, index) => (
            <li
              key={index}
              onClick={handleClick}
              style={{ cursor: "pointer", listStyle: "none" }}
            >
              {items}
            </li>
          ))
        : null}
    </ul>
  );
}
