export default function ServicesPage() {
  const services = [
    {title:'Gym & Strength',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',desc:'Weights, machines, and cardio for all levels.'},
    {title:'Personal Training',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',desc:'One-on-one coaching tailored to your goals.'},
    {title:'Swimming',img:'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',desc:'Olympic-size pool with professional coaching.'},
    {title:'Fitness Programs',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',desc:'Group classes, challenges, and community events.'}
  ];
  return (
    <section style={{padding:'85px 30px',background:'#fff'}}>
      <div style={{maxWidth:1240,margin:'auto'}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,5vw,60px)',lineHeight:1.05,letterSpacing:'-.045em',color:'#101114',marginBottom:16}}>Services</h1>
        <p style={{color:'#737780',fontSize:15,lineHeight:1.65,marginBottom:40}}>Everything you need under one roof.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {services.map(s=> (
            <div key={s.title} style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:15,overflow:'hidden',boxShadow:'0 10px 35px rgba(11,13,16,.08)'}}>
              <img src={s.img} alt={s.title} loading="lazy" style={{width:'100%',height:190,objectFit:'cover',display:'block'}} />
              <div style={{padding:19}}><h3 style={{fontWeight:800,fontSize:19,color:'#101114',margin:'0 0 5px'}}>{s.title}</h3><p style={{fontSize:12,color:'#777b84',lineHeight:1.55,margin:0}}>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
