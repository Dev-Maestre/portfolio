import ApiConsole from "../components/ApiConsole";
import ContactPanel from "../components/ContactPanel";
import EducationLine from "../components/EducationLine";
import ExperienceList from "../components/ExperienceList";
import ProjectList from "../components/ProjectList";
import SiteHeader from "../components/SiteHeader";
import Summary from "../components/Summary";
import { profile } from "../lib/portfolio";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className={styles.sheet}>
        <article className={styles.column}>
          <h1 className={styles.name}>{profile.name}</h1>
          <hr className={styles.rule} />
          <div className={styles.intro}>
            <Summary />
            <ApiConsole />
          </div>
          <ExperienceList />
          <ProjectList />
          <EducationLine />
          <ContactPanel />
        </article>
      </main>
    </>
  );
}
