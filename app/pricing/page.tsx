import Link from "next/link";
export default function PricingPage() {
  return (
    <section style={{padding:'85px 30px',background:'#090A0D'}}>
      <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(31px,3.7vw,51px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff'}}>Choose Your Plan</h1>
        <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65}}>Flexible membership plans to fit your fitness goals.</p>
      </div>
            <h2 style={{fontWeight:800,fontSize:14,color:'#ed253b',textTransform:'uppercase',letterSpacing:'.15em',marginBottom:8}}>Daily & Short-Term Packages</h2>
      <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:17}}>
        {[
          {name:'Daily Package',price:'10,000',unit:'/day',img:'/images/gym-5.jpg',items:['Gym access','Weights & cardio']},
          {name:'One Week Package (Gym Only)',price:'35,000',unit:'/week',img:'/images/gym-3.jpg',items:['Gym access','Weights & cardio','Locker room']},
          {name:'Ten Day Package (Gym Only)',price:'65,000',unit:'/10 days',img:'/images/gym-4.jpg',items:['Gym + Pool','Weights & cardio']},
          {name:'Ten Day Package (Swimming & Gym)',price:'90,000',unit:'/10 days',img:'/images/gym-6.jpg',items:['Gym + Pool','Weights & cardio','Locker room']},
        ].map(p=> (
          <div key={p.name} style={{borderRadius:14,overflow:'hidden',background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.09)',boxShadow:'0 8px 30px rgba(0,0,0,.4)',display:'flex',flexDirection:'column'}}>
            <img src={p.img} alt={p.name} loading="lazy" style={{height:152,width:'100%',objectFit:'cover'}} />
            <div style={{padding:24,flex:1,display:'flex',flexDirection:'column'}}>
              <h3 style={{fontWeight:800,fontSize:20,margin:'0 0 8px'}}>{p.name}</h3>
              <div style={{fontWeight:900,fontSize:28,marginBottom:12}}>{p.price}<span style={{fontWeight:400,fontSize:14,color:'#777b84'}}> {p.unit}</span></div>
              <ul style={{margin:'0 0 20px',paddingLeft:18,fontSize:13,lineHeight:1.7,color:'#fff'}}>{p.items.map(i=><li key={i}>{i}</li>)}</ul>
              <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none',textAlign:'center',marginTop:'auto'}}>Register →</Link>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{fontWeight:800,fontSize:14,color:'#ed253b',textTransform:'uppercase',letterSpacing:'.15em',marginTop:40,marginBottom:8}}>Monthly Packages</h2>
      <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:17}}>
        {[
          {name:'Monthly Package (Gym Only)',price:'120,000',unit:'/month',img:'/images/gym-only-original.jpg',items:['Gym access','Weights & cardio','Locker room']},
          {name:'Monthly Package (Swimming & Gym)',price:'150,000',unit:'/month',img:'/images/gym-3.jpg',items:['Gym + Pool','Weights & cardio','Locker room']},
          {name:'Couple Package (Gym Only)',price:'170,000',unit:'/month',img:'/images/gym-4.jpg',items:['2 members','Gym access','Weights & cardio']},
          {name:'Couple Package (Swimming & Gym)',price:'250,000',unit:'/month',img:'/images/gym-6.jpg',items:['2 members','Gym + Pool','Weights & cardio','Locker room']},
        ].map(p=> (
          <div key={p.name} style={{borderRadius:14,overflow:'hidden',background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.09)',boxShadow:'0 8px 30px rgba(0,0,0,.4)',display:'flex',flexDirection:'column'}}>
            <img src={p.img} alt={p.name} loading="lazy" style={{height:152,width:'100%',objectFit:'cover'}} />
            <div style={{padding:24,flex:1,display:'flex',flexDirection:'column'}}>
              <h3 style={{fontWeight:800,fontSize:20,margin:'0 0 8px'}}>{p.name}</h3>
              <div style={{fontWeight:900,fontSize:28,marginBottom:12}}>{p.price}<span style={{fontWeight:400,fontSize:14,color:'#777b84'}}> {p.unit}</span></div>
              <ul style={{margin:'0 0 20px',paddingLeft:18,fontSize:13,lineHeight:1.7,color:'#fff'}}>{p.items.map(i=><li key={i}>{i}</li>)}</ul>
              <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none',textAlign:'center',marginTop:'auto'}}>Register →</Link>
            </div>
          </div>
        ))}
      </div></section>
  );
}
