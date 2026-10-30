export default function AboutPage() {
  return (
    <section style={{padding:'85px 30px',background:'#090A0D'}}>
      <div style={{maxWidth:1240,margin:'auto'}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,5vw,60px)',lineHeight:1.05,letterSpacing:'-.045em',color:'#fff',marginBottom:24}}>About L Square</h1>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start'}}>
          <div>
            <p style={{color:'#A1A1AA',fontSize:16,lineHeight:1.7}}>L Square Fitness Gym was founded to bring world-class fitness to Dar es Salaam. We combine modern equipment, certified trainers, and a community-focused atmosphere.</p>
            <h3 style={{fontWeight:800,fontSize:22,margin:'28px 0 12px',color:'#fff'}}>Our Mission</h3>
            <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65}}>To make premium fitness accessible, inclusive, and sustainable for every member.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Gym" style={{width:'100%',borderRadius:14,objectFit:'cover',boxShadow:'0 8px 30px rgba(0,0,0,.4)'}} />
        </div>
      </div>
    </section>
  );
}
