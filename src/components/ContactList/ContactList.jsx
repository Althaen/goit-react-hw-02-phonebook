import Contact from 'components/Contact/Contact';

export default function ContactList({ contacts, filter, areFiltered }) {
  return areFiltered ? (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter))
        .map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
    </ul>
  ) : (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
