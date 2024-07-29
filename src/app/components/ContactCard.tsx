"use client"
import React from 'react'
import { contactIcons } from '../constants'
import styles from '@/app/page.module.css'
import Image from 'next/image'




const ContactCard = () => {
    return (
        <>
            <div className={styles.contacts}>
                {contactIcons.map(({ img, alt, id, href }) => <div key={id}>
                    <a href={href} target='blank'>
                        <Image src={img} height={30} width={30} alt={alt} style={{ mixBlendMode: 'hard-light' }} />
                    </a>
                </div>
                )}
            </div>
        </>
    )
}

export default ContactCard