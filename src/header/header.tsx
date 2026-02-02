'use client';
import Module from './header.module.css'
import { useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



// Icon imports
import { LuMessageCircleHeart } from 'react-icons/lu';
import { FaBell, FaSprayCanSparkles } from "react-icons/fa6";
import { IoMdSunny, IoMdMoon, IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme === 'dark' || (!savedTheme && prefersDark);
        }
        return false;
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <header className={Module.header}>
                <div className={Module.logo}>
                    <FaSprayCanSparkles className={Module.iconnav} />
                    <div className={Module.logoText}>
                        SKINSTACK
                    </div>

                </div>
                <nav className={Module.nav}>
                <Link href="/" className={pathname === '/' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href="/search" className={pathname === '/search' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Search</Link>
                            <Link href="/routine" className={pathname === '/routine' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Routine</Link>
                            <Link href="/products" className={pathname === '/products' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Products</Link>
                            <Link href="/tips-advice" className={pathname === '/tips-advice' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Tips & Advice</Link>
                </nav>
                <div className={Module.user}>
                    <Link href="/notifications" ><FaBell /></Link>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {isDark ? <IoMdMoon /> : <IoMdSunny />}
                    </button>
                </div>


                {/* //menu logo section */}
                <button onClick={() => setMenuOpen(!menuOpen)} className={Module.menuIcon}>
                    <HiOutlineMenuAlt4 />
                </button>
            </header>
            {menuOpen && (
                <>
                    <div className={Module.overlay} onClick={() => setMenuOpen(false)}></div>
                    <div className={Module.modal}>
                        <button className={Module.closeButton} onClick={() => setMenuOpen(false)}>
                            <IoMdClose />
                        </button>
                        <nav className={Module.modalNav}>
                            <Link href="/" className={pathname === '/' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href="/search" className={pathname === '/search' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Search</Link>
                            <Link href="/routine" className={pathname === '/routine' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Routine</Link>
                            <Link href="/products" className={pathname === '/products' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Products</Link>
                            <Link href="/tips-advice" className={pathname === '/tips-advice' ? Module.active : ''} onClick={() => setMenuOpen(false)}>Tips & Advice</Link>

                        </nav>
                        <div className={Module.modalUser}>
                            <Link href="/notifications" onClick={() => setMenuOpen(false)}><FaBell /></Link>
                            <button onClick={toggleTheme} className="theme-toggle">
                                {isDark ? <IoMdMoon /> : <IoMdSunny />}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Header
