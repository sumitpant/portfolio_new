"use client"
import React, { FC, useState } from 'react';
import styles from '@/app/page.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { HEADERS } from '../constants';
import useHeader from './useHeader';
import SideBar from './SideBar';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type HeaderOptionsProps = {
    pathname: string
}

const HeaderOptions = ({ pathname }: HeaderOptionsProps) => {
    return <>
        {HEADERS.map(({ id, header, path }) => <Typography component="div" sx={{ flexGrow: 1 }} key={id}>
            <Link href={path} style={pathname === path ? { color: "goldenrod", textDecoration: 'none' } : { color: "white", textDecoration: 'none' }}>
                {header}
            </Link>
        </Typography>)}
    </>
}

const Header: FC = () => {
    const { open, toggleDrawer } = useHeader();
    const pathname = usePathname();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div className={styles.optionsWrapper}>
                        <div className={styles.headerWrapper}>
                            <HeaderOptions pathname={pathname} />
                        </div>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>

                        <div className={styles.hamburger}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <SideBar open={open} toggleDrawer={toggleDrawer} pathname={pathname} />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header