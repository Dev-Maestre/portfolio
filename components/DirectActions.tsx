import { directActions } from "../lib/portfolio";
import styles from "./SiteHeader.module.css";

export default function DirectActions() {
  return (
    <ul className={styles.list}>
      {directActions.map((item) => (
        <li key={item.label}>
          <a
            className={styles.link}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
            {item.external ? (
              <span className={styles.srOnly}> (opens in a new tab)</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
