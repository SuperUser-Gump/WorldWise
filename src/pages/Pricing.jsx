// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav.jsx";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Perfect for occasional travelers who want to keep track of their
            adventures.
          </p>
        </div>
        <img src="img-2.webp" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
