import React from 'react'


const skills = [
{ name: 'Asp Dot Net core', level: 90 },
{ name: 'MS SQL', level: 85 },
{ name: 'ASP Dot Net Core MVC', level: 75 },
{ name: 'EE framework', level: 70 }
]


export default function Skills() {
return (
<section id="skills">
<h2>Skills</h2>
{skills.map(s => (
<div key={s.name} style={{marginBottom: '1rem'}}>
<div style={{display: 'flex', justifyContent: 'space-between'}}>
<span>{s.name}</span>
<span>{s.level}%</span>
</div>
<div className="skill-bar">
<div className="skill-bar-fill" style={{width: `${s.level}%`}}></div>
</div>
</div>
))}
</section>
)
}