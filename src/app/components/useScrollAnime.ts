import { MutableRefObject, useEffect } from "react";
import styles from "../page.module.css";

type Props={cardref: MutableRefObject<HTMLDivElement[]>}

const useScrollAnime=({ cardref }:Props)=>{
  
    useEffect(()=>{

        console.log(cardref);
        if(cardref?.current.length>0 ){
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                entry.target.classList.toggle(`${styles.show}`,entry.isIntersecting);
                // if(entry.isIntersecting) {
                //     observer.unobserve(entry.target)
                // }
            })
        },{threshold:0.5});
    
        cardref.current.forEach(card=>{
         observer.observe(card)
        })
       
    }
    },[cardref?.current])

return {};

}

export default useScrollAnime;