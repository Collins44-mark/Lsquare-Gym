import { getRegistrations, getMembers, getPayments, getPlans } from '../lib/data';
export default function AdminDashboard() {
  const regs = getRegistrations();
  const members = getMembers();
  const payments = getPayments();
  return (
    <div>
      <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:28,color:'#101114',marginBottom:20}}>Dashboard</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:24}}>
        <div style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,padding:20}}><div style={{fontWeight:900,fontSize:24,color:'#ed253b'}}>{regs.length}</div><div style={{fontSize:13,color:'#777b84'}}>Registrations</div></div>
        <div style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,padding:20}}><div style={{fontWeight:900,fontSize:24,color:'#ed253b'}}>{members.length}</div><div style={{fontSize:13,color:'#777b84'}}>Active Members</div></div>
        <div style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,padding:20}}><div style={{fontWeight:900,fontSize:24,color:'#ed253b'}}>{payments.length}</div><div style={{fontSize:13,color:'#777b84'}}>Confirmed Payments</div></div>
      </div>
      <h2 style={{fontWeight:800,fontSize:18,marginBottom:10}}>Recent Registrations</h2>
      <table style={{width:'100%',background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,borderCollapse:'collapse',fontSize:13}}>
        <thead><tr style={{background:'#101114',color:'#fff',textAlign:'left'}}><th style={{padding:10}}>Name</th><th>Email</th><th>Plan</th><th>Payment</th><th>Status</th></tr></thead>
        <tbody>
          {regs.slice(-6).reverse().map(r=> (
            <tr key={r.id} style={{borderBottom:'1px solid #e8e9eb'}}>
              <td style={{padding:10}}>{r.name}</td><td>{r.email}</td><td>{getPlans().find(p=>p.id===r.planId)?.name}</td><td>{r.paymentStatus}</td><td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
