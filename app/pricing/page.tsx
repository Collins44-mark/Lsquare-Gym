import Link from "next/link";
import { getPlans } from "../lib/data";
export default function PricingPage() {
  const plans = getPlans();
  return (
    <section style={{padding:'85px 30px',background:'#090A0D'}}>
      <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(31px,3.7vw,51px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff'}}>Choose Your Plan</h1>
        <p style={{color:'#A1A1AA',fontSize:15,lineHeight:1.65}}>Flexible membership plans to fit your fitness goals.</p>
      </div>
      <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:17}}>
        {plans.map(p=> (
          <div key={p.id} style={{borderRadius:14,overflow:'hidden',background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.09)',boxShadow:'0 8px 30px rgba(0,0,0,.4)',display:'flex',flexDirection:'column'}}>
            <div style={{padding:24,flex:1,display:'flex',flexDirection:'column'}}>
              <h3 style={{fontWeight:800,fontSize:20,margin:'0 0 8px'}}>{p.name}</h3>
              <div style={{fontWeight:900,fontSize:28,marginBottom:12}}>{p.price.toLocaleString()} <span style={{fontWeight:400,fontSize:14,color:'#777b84'}}>/{p.period}</span></div>
              <ul style={{margin:'0 0 20px',paddingLeft:18,fontSize:13,lineHeight:1.7,color:'#333'}}>{p.features.map(f=><li key={f}>{f}</li>)}</ul>
              <Link href="/register" style={{background:'#ed253b',color:'#fff',padding:'12px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none',textAlign:'center',marginTop:'auto'}}>Register →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
