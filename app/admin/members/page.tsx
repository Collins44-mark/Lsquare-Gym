import { getMembers } from '../../lib/data';
export default function AdminMembers() {
  const members = getMembers();
  return (
    <div>
      <h1 style={{fontWeight:900,fontSize:28,color:'#101114',marginBottom:20}}>Members</h1>
      <table style={{width:'100%',background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,borderCollapse:'collapse',fontSize:13}}>
        <thead><tr style={{background:'#101114',color:'#fff',textAlign:'left'}}><th style={{padding:10}}>Name</th><th>Email</th><th>Plan</th><th>Valid Until</th><th>Status</th></tr></thead>
        <tbody>
          {members.map(m=> (
            <tr key={m.id} style={{borderBottom:'1px solid #e8e9eb'}}>
              <td style={{padding:10}}>{m.name}</td><td>{m.email}</td><td>{m.planId}</td><td>{new Date(m.validUntil).toLocaleDateString()}</td><td>{m.active ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
