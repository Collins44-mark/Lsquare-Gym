export default function Navbar() {
  return (
    <nav style={{position:'fixed',top:16,left:0,right:0,zIndex:50,display:'flex',justifyContent:'center',padding:'0 24px'}}>
      <div style={{maxWidth:1200,width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,padding:'10px 24px',borderRadius:9999,background:'rgba(20,20,22,0.75)',border:'1px solid rgba(255,255,255,0.08)',backdropFilter:'blur(14px)',WebkitBackdropFilter:'blur(14px)'}}>
        <a href="/" aria-label="Home" style={{display:'flex',alignItems:'center',gap:10,color:'#fff',textDecoration:'none',fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:16,letterSpacing:'-.04em',lineHeight:1}}>
          <span style={{border:'2px solid #ed253b',height:32,width:26,borderRadius:6,display:'grid',placeItems:'center',fontWeight:900,fontSize:20}}>L</span>
          <span>L SQUARE <small style={{display:'block',font:'700 8px "DM Sans"',letterSpacing:'.18em',color:'#ed253b',marginTop:2}}>FITNESS GYM</small></span>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:24,fontSize:13,fontWeight:600,color:'#c2c2c6'}}>
          <a href="/" style={{color:'#fff',textDecoration:'none'}}>Home</a>
          <a href="/about" style={{color:'#c2c2c6',textDecoration:'none',transition:'color .2s'}}>About</a>
          <a href="/services" style={{color:'#c2c2c6',textDecoration:'none',transition:'color .2s'}}>Services</a>
          <a href="/pricing" style={{color:'#c2c2c6',textDecoration:'none',transition:'color .2s'}}>Pricing</a>
          <a href="/gallery" style={{color:'#c2c2c6',textDecoration:'none',transition:'color .2s'}}>Gallery</a>
          <a href="/contact" style={{color:'#c2c2c6',textDecoration:'none',transition:'color .2s'}}>Contact</a>
        </div>
        <a href="/register" style={{background:'#ed253b',color:'#fff',padding:'10px 18px',borderRadius:9999,fontWeight:800,fontSize:13,textDecoration:'none',boxShadow:'0 8px 22px #ed253b35',whiteSpace:'nowrap'}}>Join Now →</a>
      </div>
    </nav>
  );
}
