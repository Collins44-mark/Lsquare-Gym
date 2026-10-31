'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    {label:'Home',href:'/'},
    {label:'About',href:'/about'},
    {label:'Services',href:'/services'},
    {label:'Pricing',href:'/pricing'},
    {label:'Gallery',href:'/gallery'},
    {label:'Contact',href:'/contact'},
  ];
  return (
    <nav style={{position:'fixed',top:16,left:0,right:0,zIndex:50,display:'flex',justifyContent:'center',padding:'0 16px'}} aria-label="Primary">
      <div style={{maxWidth:1200,width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'10px 16px',borderRadius:9999,background:'rgba(20,20,22,0.75)',border:'1px solid rgba(255,255,255,0.08)',backdropFilter:'blur(14px)',WebkitBackdropFilter:'blur(14px)'}}>
        <a href="/" aria-label="Home" style={{display:'flex',alignItems:'center',gap:10,color:'#fff',textDecoration:'none',fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:16,letterSpacing:'-.04em',lineHeight:1}}>
          <span style={{border:'2px solid #ed253b',height:32,width:26,borderRadius:6,display:'grid',placeItems:'center',fontWeight:900,fontSize:20}}>L</span>
          <span style={{display:'none',fontSize:13,letterSpacing:'.06em',opacity:0.9}}><span style={{color:'#ed253b',fontWeight:900}}>L SQUARE</span> GYM</span>
        </a>

        {/* Desktop links + Join Now */}
        <div data-nav="desktop" style={{display:'flex',alignItems:'center',gap:16,fontSize:13,fontWeight:600,color:'#c2c2c6'}}>
          <div style={{display:'flex',alignItems:'center',gap:20}}>
            {links.map(l=> (
              <a key={l.href} href={l.href} style={{color:'#fff',textDecoration:'none',fontWeight:600,transition:'opacity .2s',opacity:0.85}} onMouseEnter={e=>e.currentTarget.style.opacity='1'} onMouseLeave={e=>e.currentTarget.style.opacity='0.85'}>{l.label}</a>
            ))}
          </div>
          <a href="/register" style={{display:'inline-flex',alignItems:'center',background:'#ed253b',color:'#fff',padding:'8px 14px',borderRadius:9999,fontWeight:800,fontSize:12,textDecoration:'none',boxShadow:'0 8px 22px #ed253b35',whiteSpace:'nowrap'}}>Join Now →</a>
        </div>

        {/* Mobile hamburger */}
        <button data-nav="mobile-btn" onClick={()=>setOpen(!open)} aria-label="Menu" aria-expanded={open} style={{background:'transparent',border:'none',color:'#fff',fontSize:22,cursor:'pointer',padding:4}}>☰</button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div data-nav='mobile-menu' style={{position:'absolute',top:72,left:16,right:16,borderRadius:20,background:'rgba(20,20,22,0.95)',border:'1px solid rgba(255,255,255,0.1)',backdropFilter:'blur(16px)',padding:20,display:'flex',flexDirection:'column',gap:12,zIndex:51}}>
          {links.map(l=> <a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{color:'#fff',textDecoration:'none',fontWeight:600,padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>{l.label}</a>)}
          <a href="/register" onClick={()=>setOpen(false)} style={{background:'#ed253b',color:'#fff',padding:'10px 16px',borderRadius:9999,fontWeight:800,fontSize:13,textDecoration:'none',textAlign:'center'}}>Join Now →</a>
        </div>
      )}
    </nav>
  );
}
