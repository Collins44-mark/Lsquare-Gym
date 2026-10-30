'use client';
import { useState, useEffect } from 'react';
import { getRegistrations, confirmPayment } from '../../lib/data';
export default function AdminRegistrations() {
  const [regs, setRegs] = useState(getRegistrations());
  useEffect(()=>setRegs(getRegistrations()), []);
  return (
    <div>
      <h1 style={{fontWeight:900,fontSize:28,color:'#fff',marginBottom:20}}>Registrations</h1>
      <table style={{width:'100%',background:'#090A0D',border:'1px solid rgba(255,255,255,0.09)',borderRadius:12,borderCollapse:'collapse',fontSize:13}}>
        <thead><tr style={{background:'#101114',color:'#fff',textAlign:'left'}}><th style={{padding:10}}>Name</th><th>Email</th><th>Plan</th><th>Payment</th><th>Action</th></tr></thead>
        <tbody>
          {regs.map(r=> (
            <tr key={r.id} style={{borderBottom:'1px solid #e8e9eb'}}>
              <td style={{padding:10}}>{r.name}</td><td>{r.email}</td><td>{r.planId}</td><td>{r.paymentStatus}</td>
              <td>
                {r.paymentStatus==='pending' && <button onClick={()=>{confirmPayment(r.id); setRegs(getRegistrations());}} style={{background:'#ed253b',color:'#fff',border:'none',padding:'6px 12px',borderRadius:6,fontSize:12,cursor:'pointer'}}>Confirm Payment</button>}
                {r.paymentStatus==='confirmed' && <span style={{fontSize:12,color:'#28a745'}}>Confirmed</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
