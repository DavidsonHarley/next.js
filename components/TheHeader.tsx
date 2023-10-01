import Link from "next/link";
import { Navigation } from "./Navigation";


const navItem = () => [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
]


const TheHeader = () => {
    return(
        <header className='header'>
            <Navigation navLinks={navItem()}/>
        </header>
    )
}

export{TheHeader};