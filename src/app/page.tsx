import { Button, Typography } from "@mui/material";
import styles from '@/app/page.module.css'
import ContactCard from "./components/ContactCard";
import { FRONT_END, HELLO_MSG, RESUME, resume_link } from "./constants";

export default function Home() {
  return (
    <>

      <div className={styles.home_container}>
        <div className={styles.sub_container}>
          <div style={{ display: 'flex' }}>
            <Typography component="h4" sx={{ flexGrow: 1 }} variant="h4" color={"goldenrod"}>
              {HELLO_MSG}
            </Typography>
          </div>
          <div className={styles.typewriter}>
            <h1> {FRONT_END}</h1>
          </div>
          <div className={styles.button_container}>
            <Button variant="outlined" style={{ color: "goldenrod", borderColor: "goldenrod" }} >
              <a href={resume_link} target="_blank">
              {RESUME}
              </a>
           
              </Button>
          </div>
          <ContactCard />

        </div>
      </div>

    </>
  );
}
