import { useState } from "react"

const useHeader = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(prev => !prev);
    };
    return {
        toggleDrawer,
        open

    }
}

export default useHeader