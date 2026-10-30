import { getPayments } from '../../lib/data';
export default function AdminPayments() {
  const payments = getPayments();
  return (
    <div>
      <h1 style={{fontWeight:900,fontSize:28,color:'#fff',marginBottom:20}}>Payments</h1>
      <table style={{width:'100%',background:'#090A0D',border:'1px solid rgba(255,255,255,0.09)',borderRadius:12,borderCollapse:'collapse',fontSize:13}}>
        <thead><tr style={{background:'#101114',color:'#fff',textAlign:'left'}}><th style={{padding:10}}>ID</th><th>Reg ID</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          {payments.map(p=> (
            <tr key={p.id} style={{borderBottom:'1px solid #e8e9eb'}}>
              <td style={{padding:10}}>{p.id}</td><td>{p.registrationId}</td><td>{p.amount.toLocaleString()}</td><td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
