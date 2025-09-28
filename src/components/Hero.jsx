import React from 'react'


export default function Hero() {
return (
<section id="home" className="row" style={{paddingTop: '6rem'}}>
<div className="col-6">
<h1>Hi, I'm <span style={{color: '#007bff'}}>Brijmohan Singh</span></h1>
<p>I'm a Full Stack Developer — React, Asp dot net core, SQL. I build clean, fast, and accessible web apps.</p>
<button className="btn btn-primary">See Projects</button>
<button className="btn btn-outline">Contact</button>
</div>
<div className="col-6">
<div className="card" style={{textAlign: 'center'}}>Profile Image</div>
</div>
</section>
)
}