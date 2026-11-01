export default function ServicesPage() {
  const services = [
    {title:'Gym & Strength',img:'/images/gym-strength-new.jpg',desc:'Weights, machines, and cardio for all levels.'},
    {title:'Personal Training',img:'/images/gym-3.jpg',desc:'One-on-one coaching tailored to your goals.'},
    {title:'Swimming',img:'/images/gym-4.jpg',desc:'Olympic-size pool with professional coaching.'},
    {title:'Fitness Programs',img:'/images/gym-5.jpg',desc:'Group classes, challenges, and community events.'}
  ];
  return (
    <section style={{padding:'85px 30px',background:'#090A0D'}}>
      <div style={{maxWidth:1240,margin:'auto'}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,5vw,60px)',lineHeight:1.05,letterSpacing:'-.045em',color:'#fff',marginBottom:16}}>Services</h1>
        <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65,marginBottom:40}}>Everything you need under one roof.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {services.map(s=> (
            <div key={s.title} style={{background:'#090A0D',border:'1px solid rgba(255,255,255,0.09)',borderRadius:15,overflow:'hidden',boxShadow:'0 8px 30px rgba(0,0,0,.4)'}}>
              <img src={s.img} alt={s.title} loading="lazy" style={{width:'100%',height:190,objectFit:'cover',display:'block'}} />
              <div style={{padding:19}}><h3 style={{fontWeight:800,fontSize:19,color:'#fff',margin:'0 0 5px'}}>{s.title}</h3><p style={{fontSize:12,color:'#777b84',lineHeight:1.55,margin:0}}>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
