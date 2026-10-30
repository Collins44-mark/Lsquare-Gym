import { getRegistrations, getMembers, getPayments } from '../../lib/data';
export default function AdminReports() {
  return (
    <div>
      <h1 style={{fontWeight:900,fontSize:28,color:'#fff',marginBottom:20}}>Reports</h1>
      <div style={{background:'#090A0D',border:'1px solid rgba(255,255,255,0.09)',borderRadius:12,padding:24}}>
        <h3 style={{fontWeight:800,fontSize:16,marginBottom:10}}>Summary</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12}}>
          <div><div style={{fontSize:12,color:'#777b84'}}>Registrations</div><div style={{fontWeight:900,fontSize:20,color:'#ed253b'}}>{getRegistrations().length}</div></div>
          <div><div style={{fontSize:12,color:'#777b84'}}>Active Members</div><div style={{fontWeight:900,fontSize:20,color:'#ed253b'}}>{getMembers().length}</div></div>
          <div><div style={{fontSize:12,color:'#777b84'}}>Payments Confirmed</div><div style={{fontWeight:900,fontSize:20,color:'#ed253b'}}>{getPayments().filter(p=>p.status==='confirmed').length}</div></div>
        </div>
      </div>
    </div>
  );
}
