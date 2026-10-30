'use client';
import { useState } from 'react';
import { getRegistrations, getMembers, getPayments, confirmPayment } from '../lib/data';

export default function AdminDashboard() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState('');
  if (!auth) {
    return (
      <div style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#090A0D'}}>
        <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:24,padding:40,maxWidth:420,width:'100%'}}>
          <h2 style={{fontWeight:900,fontSize:24,color:'#fff',marginBottom:8}}>Admin Access</h2>
          <p style={{color:'#aaa',fontSize:14,marginBottom:24}}>Enter password to access the gym management system.</p>
          <input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" style={{width:'100%',padding:12,borderRadius:10,border:'1px solid rgba(255,255,255,0.15)',background:'#121318',color:'#fff',marginBottom:12,fontSize:14}} />
          <button onClick={()=>{if(pw==='admin') setAuth(true); else alert('Invalid');}} style={{width:'100%',padding:12,borderRadius:10,border:'none',background:'#ed253b',color:'#fff',fontWeight:800,fontSize:14,cursor:'pointer'}}>Login</button>
        </div>
      </div>
    );
  }
  const regs = getRegistrations();
  const members = getMembers();
  const payments = getPayments();
  const active = members.filter(m=>m.active && new Date(m.validUntil) > new Date()).length;
  const expired = members.filter(m=>!m.active || new Date(m.validUntil) <= new Date()).length;
  const pending = regs.filter(r=>r.status==='pending').length;
  const revenue = payments.filter(p=>p.status==='confirmed').reduce((s,p)=>s+p.amount,0);
  return (
    <div style={{padding:30,color:'#fff'}}>
      <h1 style={{fontWeight:900,fontSize:28,marginBottom:24}}>Dashboard</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:30}}>
        {[
          {label:'Members',val:members.length},
          {label:'Active',val:active},
          {label:'Expired',val:expired},
          {label:'Pending Reg.',val:pending},
          {label:'Pending Pay',val:regs.filter(r=>r.paymentStatus==='pending').length},
          {label:'Revenue TZS',val:revenue.toLocaleString()},
        ].map(s=> (
          <div key={s.label} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:20}}>
            <div style={{fontSize:12,color:'#aaa'}}>{s.label}</div>
            <div style={{fontWeight:900,fontSize:22,color:'#fff'}}>{s.val}</div>
          </div>
        ))}
      </div>
      <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:20}}>
        <h3 style={{fontWeight:800,fontSize:16,marginBottom:12}}>Recent Registrations</h3>
        <table style={{width:'100%',fontSize:13,borderCollapse:'collapse'}}>
          <thead><tr style={{color:'#aaa',textAlign:'left'}}><th style={{padding:6}}>Name</th><th>Plan</th><th>Status</th><th>Payment</th></tr></thead>
          <tbody>{regs.slice(-10).map(r=> (<tr key={r.id} style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}><td style={{padding:6}}>{r.name}</td><td>{r.planId}</td><td>{r.status}</td><td>{r.paymentStatus}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  );
}
