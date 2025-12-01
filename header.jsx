export default function Header({ name, year }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>Serving great food since {year}</p>
    </header>
  );
}
