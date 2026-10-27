import { getPlans } from '../../lib/data';
export default function AdminPlans() {
  const plans = getPlans();
  return (
    <div>
      <h1 style={{fontWeight:900,fontSize:28,color:'#101114',marginBottom:20}}>Plans</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
        {plans.map(p=> (
          <div key={p.id} style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,padding:20}}>
            <h3 style={{fontWeight:800,fontSize:18,marginBottom:6}}>{p.name}</h3>
            <div style={{fontWeight:900,fontSize:22,color:'#ed253b',marginBottom:10}}>{p.price.toLocaleString()} <span style={{fontWeight:400,fontSize:13,color:'#777b84'}}>/{p.period}</span></div>
            <ul style={{fontSize:13,color:'#333',lineHeight:1.7,paddingLeft:18,margin:0}}>{p.features.map(f=> <li key={f}>{f}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
