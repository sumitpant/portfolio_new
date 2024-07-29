"use client"
import React, { useState, useRef, MutableRefObject, FC, } from 'react';
import styles from "../page.module.css";
import useScrollAnime from './useScrollAnime';
import { Skills } from '@/app/constants';
import Image from 'next/image';
import { Typography } from '@mui/material';


type CardRef = MutableRefObject<HTMLDivElement[]>


const ScrollAnime: FC = () => {

    const setRef = (el: HTMLDivElement | null, index: number): void => {
        if (el) {
            cardref.current[index] = el;
        }
    };

    const cardref: CardRef
        = useRef<HTMLDivElement[]>([]);
    const _ = useScrollAnime({ cardref });
    // const [cards, __] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    return (
        <>
            <div className={styles.container}>

                <div className={styles.skills}>
                    {Skills.map(({ id, img }, index) => {
                        return <div className={`${styles.card}`} ref={(el: HTMLDivElement) => setRef(el, index)} key={id}>
                            <Image src={img} height={60} width={100} alt="js" style={{ objectFit: 'contain' }} />
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}

export default ScrollAnime