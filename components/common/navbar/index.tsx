"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels" },
];

export default function Navbar({ user }: { user: any }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState("");

    const openHandler = () => {
        if (!menuOpen) {
            setMenuOpen(true);
            setMenu("open");
        } else {
            setMenuOpen(false);
            setMenu("");
        }
    };

    const closeHandler = () => {
        setMenuOpen(false);
        setMenu("");
    };

    useEffect(() => {
        if (menu) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [menu]);

    return (
        <header>
            <div className="menu-icon" onClick={() => openHandler()}>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </div>

            <div className={`nav ${menu ? "open" : ""}`}>
                <div className="nav__content">
                    <ul className="nav__list">
                        {navigation.map((item) => (
                            <li key={item.name} className="nav__list-item">
                                <Link className="nav__list-link" onClick={() => closeHandler()} href={item.href} key={item.name}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
