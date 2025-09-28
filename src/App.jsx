import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


export default function App() {
return (
<div>
<Header />
<main className="container">
<Hero />
<Projects />
<Skills />
<Contact />
</main>
<footer style={{textAlign: 'center', padding: '2rem', color: '#666'}}>
© {new Date().getFullYear()} — Your Name
</footer>
</div>
)
}