'use client';
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-label="Hero" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',background:'#0d0d0e',overflow:'hidden'}}>
        <img src="/hero-athlete.jpg" alt="Athlete" loading="eager" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 25%',opacity:0.92,zIndex:1}} />
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'linear-gradient(90deg,#0d0d0e 0%,rgba(13,13,14,0.65) 55%,rgba(13,13,14,0.4) 100%)',zIndex:2,pointerEvents:'none'}} />
        <div style={{position:'relative',zIndex:10,maxWidth:1200,margin:'auto',padding:'70px 30px 60px',width:'100%',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:40,alignItems:'center'}}>
          <div>
            <p style={{fontSize:12,textTransform:'uppercase',letterSpacing:'.25em',fontWeight:900,color:'#ed253b',marginBottom:12}}>L Square Fitness Gym</p>
            <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(52px,7vw,110px)',lineHeight:0.95,letterSpacing:'-.06em',color:'#fff',marginBottom:28}}>
              <span style={{display:'block'}}>Stronger</span>
              <span style={{display:'block'}}>Healthier</span>
              <span style={{display:'block'}}>Happier <span style={{color:'#ed253b'}}>You.</span></span>
            </h1>
            <p style={{color:'#b5b5bf',fontSize:16,lineHeight:1.75,maxWidth:460,marginBottom:36}}>Modern Gym. Professional Trainers. Swimming. Personal Training. A Complete Fitness Experience in One Place.</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',alignItems:'center'}}>
              <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'15px 28px',borderRadius:9999,fontWeight:800,fontSize:15,textDecoration:'none',boxShadow:'0 10px 30px #ed253b55'}}>Join Membership →</Link>
              <button onClick={()=>{const m=document.getElementById('video-modal'); if(m)m.style.display='flex';}} style={{background:'rgba(255,255,255,0.08)',color:'#fff',padding:'15px 28px',borderRadius:9999,fontWeight:800,fontSize:15,textDecoration:'none',border:'1px solid rgba(255,255,255,0.22)',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:10,backdropFilter:'blur(8px)'}}>
                <span style={{width:30,height:30,borderRadius:'50%',background:'#090A0D',display:'inline-grid',placeItems:'center'}}><span style={{width:0,height:0,borderTop:'6px solid transparent',borderBottom:'6px solid transparent',borderLeft:'10px solid #0d0d0e',marginLeft:3}}/></span> Watch Video
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

      {/* Facilities */}
      <section id="facilities" aria-label="Facilities" style={{padding:'100px 30px',background:'#121216'}}>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:40,alignItems:'start',marginBottom:60}}>
          <div>
            <p style={{fontSize:12,textTransform:'uppercase',letterSpacing:'.22em',fontWeight:900,color:'#ed253b',marginBottom:18}}>Our Facilities & Services</p>
            <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,4.5vw,58px)',lineHeight:1.05,letterSpacing:'-.05em',color:'#fff'}}>Everything You Need <br/><span style={{color:'#ed253b'}}>Under One Roof</span></h2>
          </div>
          <div style={{textAlign:'right',paddingTop:12}}>
            <p style={{color:'#aaa',fontSize:15,lineHeight:1.7,maxWidth:380,marginLeft:'auto'}}>From modern gym equipment to expert coaching and a refreshing swimming pool, L Square gives you a complete fitness experience designed for every goal.</p>
          </div>
        </div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:22}}>
          {[
            {title:'Gym & Strength',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',desc:'Modern weights and machines for all levels.'},
            {title:'Personal Training',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',desc:'One-on-one coaching for faster results.'},
            {title:'Swimming Pool',img:'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',desc:'Olympic-size pool with professional coaching.'},
            {title:'Fitness Programs',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',desc:'Structured group classes and challenges.'}
          ].map(s=> (
            <a key={s.title} href="#pricing" style={{position:'relative',borderRadius:22,overflow:'hidden',textDecoration:'none',display:'block',boxShadow:'0 10px 30px rgba(0,0,0,.3)',transition:'transform .25s ease'}}>
              <div style={{position:'relative',height:260,overflow:'hidden'}}>
                <img src={s.img} alt={s.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'22px',background:'rgba(9,10,13,0.55)',backdropFilter:'blur(10px)',WebkitBackdropFilter:'blur(10px)',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                  <h3 style={{fontFamily:"'Work Sans'",fontWeight:800,fontSize:18,color:'#fff',margin:'0 0 3px'}}>{s.title}</h3>
                  <p style={{fontSize:12.5,color:'#ccc',lineHeight:1.45,margin:0}}>{s.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About / Feature Banner */}
      <section aria-label="About Banner" style={{padding:'100px 30px',background:'#0a0a0c'}}>
        <div style={{maxWidth:1240,margin:'auto',borderRadius:28,overflow:'hidden',position:'relative',background:'#0f0f13',border:'1px solid rgba(255,255,255,0.06)',boxShadow:'0 30px 80px rgba(0,0,0,.55)'}}>
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Training" style={{position:'absolute',top:0,right:0,width:'55%',height:'100%',objectFit:'cover',objectPosition:'center 25%',opacity:0.35,zIndex:1}} />
          <div style={{position:'absolute',top:0,left:0,width:'65%',height:'100%',background:'linear-gradient(90deg,#0f0f13 0%,rgba(15,15,19,0.88) 50%,rgba(15,15,19,0.4) 100%)',zIndex:2}} />
          <div style={{position:'relative',zIndex:10,display:'grid',gridTemplateColumns:'1.1fr 0.9fr',gap:60,alignItems:'center',padding:'80px 60px'}}>
            <div>
              <p style={{fontSize:12,textTransform:'uppercase',letterSpacing:'.22em',fontWeight:900,color:'#ed253b',marginBottom:18}}>A Better, Stronger You</p>
              <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(32px,4vw,52px)',lineHeight:1.08,letterSpacing:'-.045em',color:'#fff',marginBottom:18}}>Built By Discipline. <br/><span style={{color:'#ed253b'}}>Fueled By Community.</span></h2>
              <p style={{color:'#b5b5bf',fontSize:15,lineHeight:1.7,marginBottom:28}}>L Square Fitness Gym is a premium fitness destination in Dar es Salaam. From modern weights and machines to an Olympic-size pool, we provide everything you need to train, recover, and grow.</p>
              <div style={{display:'flex',gap:28,marginBottom:30}}>
                {[
                  {label:'2K+',sub:'Active Members'},
                  {label:'15+',sub:'Years in Fitness'},
                  {label:'50+',sub:'Modern Machines'},
                  {label:'Expert',sub:'Trainers'},
                ].map(s=> (
                  <div key={s.label}><div style={{fontWeight:900,fontSize:22,color:'#ed253b'}}>{s.label}</div><div style={{fontSize:11,color:'#777',marginTop:2}}>{s.sub}</div></div>
                ))}
              </div>
              <div style={{display:'flex',gap:14,alignItems:'center',flexWrap:'wrap'}}>
                <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'13px 22px',borderRadius:9999,fontWeight:800,fontSize:14,textDecoration:'none',boxShadow:'0 8px 20px #ed253b55'}}>Join Membership →</Link>
                <a href="#facilities" style={{color:'#fff',fontWeight:600,fontSize:14,textDecoration:'none',borderBottom:'1px solid rgba(255,255,255,0.3)',paddingBottom:2}}>Explore Facilities →</a>
              </div>
            </div>
            <div style={{position:'relative'}}>
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Training" style={{width:'100%',borderRadius:20,objectFit:'cover',boxShadow:'0 20px 50px rgba(0,0,0,.4)',display:'block'}} />
              <div style={{position:'absolute',bottom:-18,right:-10,width:220,padding:18,borderRadius:16,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',backdropFilter:'blur(12px)',boxShadow:'0 16px 40px rgba(0,0,0,.35)'}}>
                <div style={{fontWeight:900,fontSize:20,color:'#fff',lineHeight:1.15,marginBottom:6}}>Train <br/>Recover <br/><span style={{color:'#ed253b'}}>Grow</span></div>
                <div style={{fontSize:11,color:'#aaa',marginTop:8}}>More Than A Gym<br/>A Community.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section aria-label="Why Choose" style={{padding:'100px 30px',background:'#121216'}}>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:40,alignItems:'start'}}>
          <div>
            <p style={{fontSize:12,textTransform:'uppercase',letterSpacing:'.22em',fontWeight:900,color:'#ed253b',marginBottom:18}}>Why Choose L Square</p>
            <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(36px,4.5vw,58px)',lineHeight:1.05,letterSpacing:'-.05em',color:'#fff'}}>More Than A Gym <br/><span style={{color:'#ed253b'}}>A Lifestyle.</span></h2>
          </div>
          <div style={{paddingTop:12}}>
            <p style={{color:'#aaa',fontSize:15,lineHeight:1.7}}>We combine world-class facilities, professional trainers and a supportive community to give you the best fitness experience in Dar es Salaam.</p>
          </div>
        </div>
      </section>

      {/* Existing routes preserved */}
      <section id="pricing" aria-label="Pricing" style={{padding:'85px 30px',background:'#090A0D'}}>
        <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
          <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(31px,3.7vw,51px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff'}}>Choose Your Plan</h2>
          <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65}}>Flexible membership plans to fit your fitness goals.</p>
        </div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:17}}>
          {[
            {name:'Gym Only',price:'45,000',unit:'/month',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',items:['Access to gym floor','Weights & cardio','Locker room']},
            {name:'Premium',price:'75,000',unit:'/month',img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',items:['Gym + Pool','Personal training 2x/mo','Sauna access']},
            {name:'Family',price:'120,000',unit:'/month',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',items:['2 adults + kids','All facilities','Priority booking']}
          ].map(p=> (
            <div key={p.name} style={{borderRadius:14,overflow:'hidden',background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.09)',boxShadow:'0 8px 30px rgba(0,0,0,.4)',display:'flex',flexDirection:'column'}}>
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

      <section id="gallery" aria-label="Gallery" style={{padding:'85px 30px',background:'#090A0D'}}>
        <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}><h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff'}}>Gallery</h2></div>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {[
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
            'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
          ].map((src,i)=> <img key={i} src={src} alt="Gym" loading="lazy" style={{width:'100%',borderRadius:14,objectFit:'cover',height:260,boxShadow:'0 8px 30px rgba(0,0,0,.4)'}} />)}
        </div>
      </section>

      <section id="contact" aria-label="Contact" style={{padding:'85px 30px',background:'#090A0D'}}>
        <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:40,alignItems:'start'}}>
          <div>
            <h2 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff',marginBottom:16}}>Contact</h2>
            <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65,marginBottom:24}}>Visit us in Dar es Salaam or reach out for membership questions.</p>
            <div style={{fontSize:14,color:'#333',lineHeight:1.7}}>
              <div><strong>Email:</strong> info@lsquaregym.co.tz</div>
              <div><strong>Phone:</strong> +255 712 345 678</div>
              <div><strong>Location:</strong> Dar es Salaam, Tanzania</div>
            </div>
            <a href="#" style={{display:'inline-block',marginTop:24,background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none'}}>Send Message</a>
          </div>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Contact" style={{width:'100%',borderRadius:14,objectFit:'cover',boxShadow:'0 8px 30px rgba(0,0,0,.4)'}} />
        </div>
      </section>
    </>
  );
}
