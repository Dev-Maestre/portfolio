import DirectActions from "./DirectActions";
import styles from "./SiteHeader.module.css";

const sections = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className={styles.masthead}>
      <div className={styles.inner}>
        <p className={styles.kicker}>Portfolio</p>
        <div className={styles.groups}>
          <nav aria-label="Sections">
            <ul className={styles.list}>
              {sections.map((item) => (
                <li key={item.href}>
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Direct actions">
            <DirectActions />
          </nav>
        </div>
      </div>
    </header>
  );
}
