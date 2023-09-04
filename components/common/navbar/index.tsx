"use client";

// https://codepen.io/RSH87/pen/rmgYbo?editors=0010

export default function Navbar({ user }: { user: any }) {
    return (
        <div>
            <div className="menu-icon">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="nav">
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list-item">Home</li>
                        <li className="nav__list-item">About</li>
                        <li className="nav__list-item">Projects</li>
                        <li className="nav__list-item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
