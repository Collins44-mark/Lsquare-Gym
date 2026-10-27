'use client';
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-label="Hero" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',background:'#0a0a0c',overflow:'hidden'}}>
        {/* Background athlete image right */}
        <img src="/hero-athlete.jpg" alt="Athlete" loading="eager" style={{position:'absolute',top:0,right:0,width:'65%',height:'100%',objectFit:'cover',objectPosition:'center 20%',opacity:0.95,zIndex:1}} />
        {/* Left gradient fade for text readability */}
        <div style={{position:'absolute',top:0,left:0,width:'70%',height:'100%',background:'linear-gradient(90deg,#0a0a0c 0%,rgba(10,10,12,0.85) 50%,rgba(10,10,12,0.35) 100%)',zIndex:2,pointerEvents:'none'}} />

        <div style={{position:'relative',zIndex:10,maxWidth:1200,margin:'auto',padding:'140px 30px 100px',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
          {/* Left content */}
          <div>
            <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.22em',fontWeight:900,color:'#ed253b',marginBottom:20}}>L SQUARE FITNESS GYM</p>
            <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(48px,6vw,96px)',lineHeight:0.92,letterSpacing:'-.05em',color:'#fff',marginBottom:24}}>
              <span style={{display:'block'}}>Stronger</span>
              <span style={{display:'block'}}>Healthier</span>
              <span style={{display:'block'}}>Happier <span style={{color:'#ed253b'}}>You.</span></span>
            </h1>
            <p style={{color:'#b0b0b5',fontSize:15,lineHeight:1.7,maxWidth:480,marginBottom:32}}>Modern Gym. Professional Trainers. Swimming. Personal Training. A Complete Fitness Experience in One Place.</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',alignItems:'center'}}>
              <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'14px 24px',borderRadius:9999,fontWeight:800,fontSize:15,textDecoration:'none',boxShadow:'0 10px 30px #ed253b45'}}>Join Membership →</Link>
              <button onClick={()=>{const m=document.getElementById('video-modal'); if(m)m.style.display='flex';}} style={{background:'rgba(255,255,255,0.05)',color:'#fff',padding:'14px 24px',borderRadius:9999,fontWeight:800,fontSize:15,textDecoration:'none',border:'1px solid rgba(255,255,255,0.25)',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:10}}>
                <span style={{width:28,height:28,borderRadius:'50%',background:'#fff',display:'inline-grid',placeItems:'center'}}><span style={{width:0,height:0,borderTop:'6px solid transparent',borderBottom:'6px solid transparent',borderLeft:'10px solid #0a0a0c',marginLeft:3}}/></span> Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video modal */}
      <div id="video-modal" style={{position:'fixed',inset:0,zIndex:60,background:'rgba(0,0,0,0.85)',display:'none',alignItems:'center',justifyContent:'center',padding:30}} onClick={e=>{if(e.target===e.currentTarget){const m=document.getElementById('video-modal'); if(m)m.style.display='none';}}}>
        <div style={{background:'#101114',borderRadius:16,padding:20,maxWidth:720,width:'100%',boxShadow:'0 20px 60px rgba(0,0,0,.5)',position:'relative',border:'1px solid rgba(255,255,255,.08)'}}>
          <button onClick={()=>{const m=document.getElementById('video-modal'); if(m)m.style.display='none';}} style={{position:'absolute',top:12,right:12,background:'#ed253b',color:'#fff',border:'none',borderRadius:'50%',width:32,height:32,cursor:'pointer',fontWeight:900}}>×</button>
          <div style={{aspectRatio:'16/9',background:'#111',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#777'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontWeight:900,fontSize:22,color:'#fff',marginBottom:8}}>Gym Tour Preview</div>
              <div style={{fontSize:13,color:'#999'}}>Video placeholder — no real gym video embedded.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing sections preserved below */}
      <section id="about" aria-label="About" style={{padding:'85px 30px',background:'#fff'}}>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#101114',marginBottom:16}}>Built By Discipline.<br/>Fueled By Community.</h2>
            <p style={{color:'#737780',fontSize:15,lineHeight:1.65}}>L Square Fitness Gym is a premium fitness destination in Dar es Salaam. From modern weights and machines to an Olympic-size pool, we provide everything you need to train, recover, and grow.</p>
            <div style={{marginTop:24,display:'flex',gap:24}}>
              <div><div style={{fontWeight:900,fontSize:22,color:'#ed253b'}}>15+</div><div style={{fontSize:12,color:'#777b84'}}>Years Active</div></div>
              <div><div style={{fontWeight:900,fontSize:22,color:'#ed253b'}}>2k</div><div style={{fontSize:12,color:'#777b84'}}>Members</div></div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Gym interior" style={{width:'100%',borderRadius:14,objectFit:'cover',boxShadow:'0 9px 27px rgba(11,13,16,.08)'}} />
        </div>
      </section>

      <section id="services" aria-label="Services" style={{padding:'85px 30px',background:'#fff'}}>
        <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
          <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#101114'}}>Facilities & Services</h2>
          <p style={{color:'#737780',fontSize:15,lineHeight:1.65}}>Modern weights, expert coaching, pool, and community.</p>
        </div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {[
            {title:'Gym & Strength',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',desc:'Modern weights and machines for all levels.'},
            {title:'Personal Training',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',desc:'One-on-one coaching for faster results.'},
            {title:'Swimming',img:'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',desc:'Olympic-size pool with professional coaching.'},
            {title:'Fitness Programs',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',desc:'Structured group classes and challenges.'}
          ].map(s=> (
            <a key={s.title} href="#pricing" style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:15,overflow:'hidden',boxShadow:'0 10px 35px rgba(11,13,16,.08)',textDecoration:'none',display:'block',transition:'transform .2s'}}>
              <img src={s.img} alt={s.title} loading="lazy" style={{width:'100%',height:190,objectFit:'cover',display:'block'}} />
              <div style={{padding:19}}><h3 style={{fontFamily:"'Work Sans'",fontWeight:800,fontSize:19,color:'#101114',margin:'0 0 5px'}}>{s.title}</h3><p style={{fontSize:12,color:'#777b84',lineHeight:1.55,margin:0}}>{s.desc}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section id="pricing" aria-label="Pricing" style={{padding:'85px 30px',background:'#fff'}}>
        <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
          <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(31px,3.7vw,51px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#101114'}}>Choose Your Plan</h2>
          <p style={{color:'#737780',fontSize:15,lineHeight:1.65}}>Flexible membership plans to fit your fitness goals.</p>
        </div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:17}}>
          {[
            {name:'Gym Only',price:'45,000',unit:'/month',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',items:['Access to gym floor','Weights & cardio','Locker room']},
            {name:'Premium',price:'75,000',unit:'/month',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',items:['Gym + Pool','Personal training 2x/mo','Sauna access']},
            {name:'Family',price:'120,000',unit:'/month',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',items:['2 adults + kids','All facilities','Priority booking']}
          ].map(p=> (
            <div key={p.name} style={{border:'1px solid #dedfe2',borderRadius:14,overflow:'hidden',background:'#fff',boxShadow:'0 9px 27px rgba(11,13,16,.08)',display:'flex',flexDirection:'column'}}>
              <img src={p.img} alt={p.name} loading="lazy" style={{height:152,width:'100%',objectFit:'cover'}} />
              <div style={{padding:24,flex:1,display:'flex',flexDirection:'column'}}>
                <h3 style={{fontWeight:800,fontSize:20,margin:'0 0 8px'}}>{p.name}</h3>
                <div style={{fontWeight:900,fontSize:28,marginBottom:12}}>{p.price}<span style={{fontWeight:400,fontSize:14,color:'#777b84'}}> {p.unit}</span></div>
                <ul style={{margin:'0 0 20px',paddingLeft:18,fontSize:13,lineHeight:1.7,color:'#333'}}>{p.items.map(i=><li key={i}>{i}</li>)}</ul>
                <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none',textAlign:'center',marginTop:'auto'}}>Register →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" aria-label="Gallery" style={{padding:'85px 30px',background:'#fff'}}>
        <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}><h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#101114'}}>Gallery</h2></div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {[
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
          ].map((src,i)=> <img key={i} src={src} alt="Gym" loading="lazy" style={{width:'100%',borderRadius:14,objectFit:'cover',height:260,boxShadow:'0 10px 35px rgba(11,13,16,.08)'}} />)}
        </div>
      </section>

      <section id="contact" aria-label="Contact" style={{padding:'85px 30px',background:'#fff'}}>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start'}}>
          <div>
            <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#101114',marginBottom:16}}>Contact</h2>
            <p style={{color:'#737780',fontSize:15,lineHeight:1.65,marginBottom:24}}>Visit us in Dar es Salaam or reach out for membership questions.</p>
            <div style={{fontSize:14,color:'#333',lineHeight:1.7}}>
              <div><strong>Email:</strong> info@lsquaregym.co.tz</div>
              <div><strong>Phone:</strong> +255 712 345 678</div>
              <div><strong>Location:</strong> Dar es Salaam, Tanzania</div>
            </div>
            <a href="#" style={{display:'inline-block',marginTop:24,background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none'}}>Send Message</a>
          </div>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Contact" style={{width:'100%',borderRadius:14,objectFit:'cover',boxShadow:'0 9px 27px rgba(11,13,16,.08)'}} />
        </div>
      </section>
    </>
  );
}
