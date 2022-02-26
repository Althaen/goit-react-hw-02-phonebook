export default function Contact({ id, name, number }) {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
}
