import Feature from "@/app/components/feature/feature";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      <section>
        <div className={styles.featureContainer}>
          <Feature
            title="Feature title"
            iconSrc="/speed.svg"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum id reprehenderit magni quia rem porro deserunt aut maxime distinctio ab perspiciatis rerum ullam, placeat, quos voluptatibus repellat neque eos perferendis.
            </p>
          </Feature>
          
          <Feature
            title="Feature title"
            iconSrc="/speed.svg"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum id reprehenderit magni quia rem porro deserunt aut maxime distinctio ab perspiciatis rerum ullam, placeat, quos voluptatibus repellat neque eos perferendis.
            </p>
          </Feature>
          
          <Feature
            title="Feature title"
            iconSrc="/speed.svg"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum id reprehenderit magni quia rem porro deserunt aut maxime distinctio ab perspiciatis rerum ullam, placeat, quos voluptatibus repellat neque eos perferendis.
            </p>
          </Feature>
        </div>
      </section>
    </div>
  );
}
