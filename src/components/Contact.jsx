import React, { useState } from 'react'


export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', message: '' })


function handleChange(e) {
setForm({ ...form, [e.target.name]: e.target.value })
}


function handleSubmit(e) {
e.preventDefault()
const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
}


return (
<section id="contact">
<h2>Contact</h2>
<form onSubmit={handleSubmit} className="row">
<div className="col-6">
<input required name="name" placeholder="Your name" value={form.name} onChange={handleChange} style={{width: '100%', padding: '0.5rem', marginBottom: '1rem'}} />
</div>
<div className="col-6">
<input required name="email" placeholder="Your email" value={form.email} onChange={handleChange} style={{width: '100%', padding: '0.5rem', marginBottom: '1rem'}} />
</div>
<div className="col-12">
<textarea required name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={6} style={{width: '100%', padding: '0.5rem', marginBottom: '1rem'}} />
</div>
<div className="col-12">
<button type="submit" className="btn btn-primary">Send</button>
</div>
</form>
</section>
)
}