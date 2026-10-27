export default function ContactPage() {
  return (
    <section style={{padding:'85px 30px',background:'#fff'}}>
      <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start'}}>
        <div>
          <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,5vw,60px)',lineHeight:1.05,letterSpacing:'-.045em',color:'#101114',marginBottom:16}}>Contact</h1>
          <p style={{color:'#737780',fontSize:15,lineHeight:1.65,marginBottom:24}}>Reach out for memberships, events, or questions.</p>
          <div style={{fontSize:14,color:'#333',lineHeight:1.7}}>
            <div><strong>Email:</strong> info@lsquaregym.co.tz</div>
            <div><strong>Phone:</strong> +255 712 345 678</div>
            <div><strong>Address:</strong> Dar es Salaam, Tanzania</div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Gym" style={{width:'100%',borderRadius:14,objectFit:'cover',boxShadow:'0 9px 27px rgba(11,13,16,.08)'}} />
      </div>
    </section>
  );
}
