import styles from "./Product.module.css";
import PageNav from "../components/PageNav.jsx";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.webp"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            At WorldWise, we are passionate about exploring the world and
            creating lasting memories. Our journey began with a simple idea: to
            help travelers like you connect with the places you visit and the
            experiences you have.
          </p>
          <p>
            Join us on this incredible journey as we inspire wanderlust, foster
            a global community of adventurers, and encourage you to explore the
            world like never before.
          </p>
        </div>
      </section>
    </main>
  );
}
