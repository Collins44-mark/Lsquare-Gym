'use client';
import { useState, useEffect } from 'react';
import { getMembers, getRegistrations } from '../../lib/data';
export default function StaffAttendance() {
  const [members, setMembers] = useState(getMembers());
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  useEffect(()=>{
    const m = getMembers();
    setMembers(m);
    const reg = getRegistrations();
    const checkedIn: Record<string, boolean> = {};
    m.forEach(mem=> {
      const r = reg.find(r=>r.id===mem.id);
      if (!r || r.status !== 'active' || new Date(r.validUntil) < new Date()) checkedIn[mem.id] = false;
    });
    setChecked(checkedIn);
  }, []);

  const toggle = (id: string) => {
    const mem = members.find(m=>m.id===id);
    if (!mem) return;
    const reg = getRegistrations().find(r=>r.id===id);
    if (!reg || reg.status !== 'active' || new Date(reg.validUntil) < new Date()) { alert('Membership not active or expired'); return; }
    setChecked(c=> ({...c, [id]: !c[id]}));
  };

  return (
    <section style={{padding:'85px 30px',background:'#fff'}}>
      <div style={{maxWidth:1240,margin:'auto'}}>
        <h1 style={{fontWeight:900,fontSize:28,color:'#101114',marginBottom:8}}>Staff Attendance</h1>
        <p style={{color:'#777b84',fontSize:13,marginBottom:24}}>Only active, non-expired members can be checked in.</p>
        <table style={{width:'100%',background:'#fff',border:'1px solid #e8e9eb',borderRadius:12,borderCollapse:'collapse',fontSize:13}}>
          <thead><tr style={{background:'#101114',color:'#fff',textAlign:'left'}}><th style={{padding:10}}>Member</th><th>Email</th><th>Plan</th><th>Valid Until</th><th>Check-in</th></tr></thead>
          <tbody>
            {members.map(m=> {
              const reg = getRegistrations().find(r=>r.id===m.id);
              const active = reg && reg.status === 'active' && new Date(reg.validUntil) >= new Date();
              return (
                <tr key={m.id} style={{borderBottom:'1px solid #e8e9eb'}}>
                  <td style={{padding:10}}>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.planId}</td>
                  <td>{new Date(m.validUntil).toLocaleDateString()}</td>
                  <td>
                    <button onClick={()=>toggle(m.id)} disabled={!active} style={{background:checked[m.id] ? '#28a745' : '#ed253b', color:'#fff', border:'none', padding:'6px 12px', borderRadius:6, fontSize:12, cursor: active ? 'pointer' : 'not-allowed'}}>{checked[m.id] ? 'Checked In' : 'Check In'}</button>
                    {!active && <span style={{fontSize:11, color:'#777b84', marginLeft:8}}>Pending / Expired</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
