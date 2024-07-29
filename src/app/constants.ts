import { Connect, Header, Skill } from "@/app/types";

export const Skills: Skill[] = [
    {
        id: 1,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        alt:"js"
    },
    {
        id:2 ,
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        alt:'ts'
    },
    {
        id:3 ,
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        alt:'react'
    },
    {
        id:4,
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        alt:"html"
    },
    {
        id:5,
        img:"https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
        alt:"react-native"
    },
    {
        id:6,
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        alt:"css"
    },
    {
        id:7,
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        alt:"redux"
    },
    {
        id:8,
        img:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
        alt:"express"
    },
    {
        id:9,
        img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        alt:"node js"
    },
    {
        id:10,
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        alt:'next js'
    },
    {
        id:11,
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        alt:"sass"
    }
]



export const HEADERS: Header[] = [
    {
        id: 1,
        header: "Home",
        path:"/",
    },
    {
        id: 2,
        header: "About",
        path:"/about",
    }
]
export const FRONT_END:string='Front-End Developer.'
export const HELLO_MSG:string="Hi,I'm Sumit Pant";
export const RESUME:string="Resume"

export const resume_link:string="https://docs.google.com/document/d/1w-jzvAMP8LD94fquetNPEUMd3D-99hro_U61omJcrWQ/edit?usp=sharing"

export const contactIcons:Connect[]=[
    {
        id:1,
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
        alt:'linkedin',
        href:"https://www.linkedin.com/in/sumit-pant-0719a519b/"
    },
    {
        id:2,
        img:"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw",
        alt:"git",
        href:"https://github.com/sumitpant"
    }
]
export const Aboutme:string= "I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently I am working as a Front End Devloper at IDFC first bank"