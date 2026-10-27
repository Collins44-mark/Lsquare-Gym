export default function Navbar() {
  return (
    <header style={{position:'sticky',top:0,zIndex:50,background:'rgba(16,17,20,0.85)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
      <div style={{maxWidth:1440,margin:'auto',padding:'0 4%',minHeight:72,display:'flex',alignItems:'center',justifyContent:'space-between',gap:28}}>
        <a href="/" aria-label="L Square Fitness Gym home" style={{display:'flex',alignItems:'center',gap:10,color:'#fff',textDecoration:'none',fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:16,letterSpacing:'-.04em',lineHeight:1}}>
          <span style={{border:'2px solid #ed253b',height:33,width:25,borderRadius:5,display:'grid',placeItems:'center',fontWeight:900,color:'#fff',fontSize:21}}>L</span>
          <span>L SQUARE <small style={{display:'block',font:'700 8px "DM Sans"',letterSpacing:'.18em',color:'#ed253b',marginTop:3}}>FITNESS GYM</small></span>
        </a>
        <nav aria-label="Main" style={{display:'flex',alignItems:'center',gap:23,flex:1,justifyContent:'center'}}>
          <a href="/" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>Home</a>
          <a href="/about" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>About</a>
          <a href="/services" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>Services</a>
          <a href="/pricing" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>Pricing</a>
          <a href="/gallery" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>Gallery</a>
          <a href="/contact" style={{color:'#c9c9ce',fontSize:12,fontWeight:700,transition:'color .2s'}}>Contact</a>
        </nav>
        <a href="/register" style={{background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none',boxShadow:'0 8px 22px #ed253b35',whiteSpace:'nowrap',display:'inline-flex',alignItems:'center',gap:9}}>Join Now →</a>
      </div>
    </header>
  );
}
