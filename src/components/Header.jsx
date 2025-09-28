import React from 'react'


export default function Header() {
return (
<header className="navbar">
<div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
<div className="logo" style={{fontWeight: 'bold'}}>Brijmohan Singh</div>
<nav>
<a href="#home">Home</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
</nav>
</div>
</header>
)
}