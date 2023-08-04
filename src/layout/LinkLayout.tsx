import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LinkLayout: React.FC = () => {
    return (
        <>
            <header className="flex h-14">
                <nav className="flex justify-center items-center gap-10 w-full">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/main"}>Main page</Link>
                    <Link to={"/about"}>About</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LinkLayout