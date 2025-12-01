import chefImage from "file:///Users/aditipatel/Desktop/mo%206/chef.jpg.png";

export default function Main({ dishes }) {
  return (
    <main>
      <section>
        <h2>Our Dishes</h2>
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Meet the Chef</h2>
        <img
          src={chefImage}
          alt="Chef in the kitchen"
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </section>
    </main>
  );
}
