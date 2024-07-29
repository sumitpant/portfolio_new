export interface Skill{
    id:number,
    img:string,
    alt:string
}
export interface Connect extends Skill{
    href:string
}



export type Header={
    id:number,
    header:string,
    path:string,
}

