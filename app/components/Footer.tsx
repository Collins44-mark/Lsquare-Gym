export default function Footer() {
  return (
    <footer style={{background:'#111215',borderTop:'1px solid rgba(255,255,255,.08)',padding:'60px 30px 30px',color:'#c9c9ce'}}>
      <div style={{maxWidth:1440,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:40,marginBottom:40}}>
        <div>
          <div style={{fontWeight:900,color:'#fff',fontSize:16,letterSpacing:'-.04em',marginBottom:12}}>L SQUARE <span style={{color:'#ed253b',fontSize:10,letterSpacing:'.18em'}}>FITNESS GYM</span></div>
          <p style={{fontSize:13,lineHeight:1.6}}>Modern gym, professional trainers, swimming pool and community programs in Dar es Salaam.</p>
        </div>
        <div>
          <div style={{fontWeight:700,color:'#fff',fontSize:13,marginBottom:12}}>Quick Links</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,fontSize:13}}>
            <a href="/" style={{color:'#c9c9ce',textDecoration:'none'}}>Home</a>
            <a href="/about" style={{color:'#c9c9ce',textDecoration:'none'}}>About</a>
            <a href="/pricing" style={{color:'#c9c9ce',textDecoration:'none'}}>Pricing</a>
            <a href="/contact" style={{color:'#c9c9ce',textDecoration:'none'}}>Contact</a>
          </div>
        </div>
        <div>
          <div style={{fontWeight:700,color:'#fff',fontSize:13,marginBottom:12}}>Contact</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,fontSize:13}}>
            <a href="mailto:info@lsquaregym.co.tz" style={{color:'#c9c9ce',textDecoration:'none'}}>info@lsquaregym.co.tz</a>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1440,margin:'auto',fontSize:12,color:'#777b84',borderTop:'1px solid rgba(255,255,255,.06)',paddingTop:20}}>© {new Date().getFullYear()} L Square Fitness Gym — Dar es Salaam. Demo site.</div>
    </footer>
  );
}
