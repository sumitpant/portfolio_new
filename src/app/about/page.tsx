import React from 'react'
import ScrollAnime from '../components/ScrollAnime'
import { Aboutme } from '@/app/constants'
import styles from '@/app/page.module.css'
import { Typography } from '@mui/material'
const about = () => {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <Typography component="h4" variant='h4' textAlign={"center"} color={"goldenrod"} className={styles.about_me}>
          About Me
        </Typography>
      </div>
      <div className={styles.about_content_wrapper}>
        <div className={styles.about_me_text_div}>
          <Typography width={800} className={styles.about_me_text}>
            {Aboutme}
          </Typography>

        </div>
        <div style={{ marginTop: '10px' }}>
          <Typography component="h4" variant='h4' textAlign={"center"} color={"goldenrod"} className={styles.about_me}>
            Tools and Technologies
          </Typography>

        </div>

        <ScrollAnime />
      </div>
    </div>
  )
}

export default about