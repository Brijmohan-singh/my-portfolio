import React from 'react'
import projects from '../data/projects'


export default function Projects() {
return (
<section id="projects">
<h2>Projects</h2>
<div className="row">
{projects.map(p => (
<div key={p.id} className="col-6">
<div className="card">
<h3>{p.title}</h3>
<p>{p.description}</p>
<div style={{margin: '0.5rem 0'}}>
{p.tech.map(t => (
<span key={t} style={{border: '1px solid #ccc', borderRadius: '12px', padding: '2px 6px', marginRight: '4px', fontSize: '12px'}}>{t}</span>
))}
</div>
<a className="btn btn-outline" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
<a className="btn btn-outline" href={p.repo} target="_blank" rel="noreferrer">Code</a>
</div>
</div>
))}
</div>
</section>
)
}