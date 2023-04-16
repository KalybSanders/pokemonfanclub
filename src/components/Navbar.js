import Link from 'next/link';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Pokèmon Fan Club</h1>
            <div className="links"> 
                <Link href='/'>Home</Link>
                <Link href='/pokemon'>Pokèdex</Link>
                <Link href='/quiz'>Quiz</Link>
            </div>
        </nav>
    );
}

export default Navbar;