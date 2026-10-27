'use client';
import { useState } from 'react';
import { getPlans, addRegistration } from '../lib/data';
import Link from 'next/link';

export default function RegisterPage() {
  const plans = getPlans();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name:'', email:'', phone:'', planId: plans[0].id });
  const [done, setDone] = useState(false);

  const submit = () => { addRegistration({ name: form.name, email: form.email, phone: form.phone, planId: form.planId }); setDone(true); };

  return (
    <section style={{padding:'85px 30px',background:'#fff',minHeight:'70vh'}}>
      <div style={{maxWidth:640,margin:'auto'}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,4vw,48px)',lineHeight:1.05,letterSpacing:'-.045em',color:'#101114',marginBottom:8}}>Membership Registration</h1>
        <div style={{fontSize:13,color:'#777b84',marginBottom:24}}>Step {step} of 3</div>
        {!done ? (
          <div style={{background:'#fff',border:'1px solid #e8e9eb',borderRadius:14,padding:24,boxShadow:'0 9px 27px rgba(11,13,16,.08)'}}>
            {step===1 && (
              <>
                <label style={{fontWeight:700,fontSize:13,display:'block',marginBottom:6}}>Full Name</label>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{width:'100%',padding:10,border:'1px solid #dedfe2',borderRadius:8,marginBottom:16,fontSize:14}} placeholder="Your name" />
                <label style={{fontWeight:700,fontSize:13,display:'block',marginBottom:6}}>Email</label>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:10,border:'1px solid #dedfe2',borderRadius:8,marginBottom:16,fontSize:14}} placeholder="email@example.com" />
              </>
            )}
            {step===2 && (
              <>
                <label style={{fontWeight:700,fontSize:13,display:'block',marginBottom:6}}>Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={{width:'100%',padding:10,border:'1px solid #dedfe2',borderRadius:8,marginBottom:16,fontSize:14}} placeholder="+255 ..." />
                <label style={{fontWeight:700,fontSize:13,display:'block',marginBottom:6}}>Plan</label>
                <select value={form.planId} onChange={e=>setForm({...form,planId:e.target.value})} style={{width:'100%',padding:10,border:'1px solid #dedfe2',borderRadius:8,fontSize:14}}>
                  {plans.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </>
            )}
            {step===3 && (
              <div>
                <h3 style={{fontWeight:800,fontSize:18,marginBottom:10}}>Review</h3>
                <div style={{fontSize:14,color:'#333',lineHeight:1.7,marginBottom:20}}>
                  <div><strong>Name:</strong> {form.name}</div>
                  <div><strong>Email:</strong> {form.email}</div>
                  <div><strong>Phone:</strong> {form.phone}</div>
                  <div><strong>Plan:</strong> {plans.find(p=>p.id===form.planId)?.name}</div>
                </div>
                <button onClick={submit} style={{background:'#ed253b',color:'#fff',padding:'12px 24px',borderRadius:10,fontWeight:800,fontSize:13,border:'none',cursor:'pointer'}}>Confirm Registration</button>
              </div>
            )}
            <div style={{marginTop:20,display:'flex',gap:10}}>
              {step>1 && <button onClick={()=>setStep(s=>s-1)} style={{padding:'8px 14px',borderRadius:8,border:'1px solid #dedfe2',background:'#fff',cursor:'pointer',fontSize:13}}>Back</button>}
              {step<3 && <button onClick={()=>setStep(s=>s+1)} style={{padding:'8px 14px',borderRadius:8,border:'1px solid #ed253b',background:'#ed253b',color:'#fff',cursor:'pointer',fontSize:13}}>Next</button>}
            </div>
          </div>
        ) : (
          <div style={{textAlign:'center',padding:40,background:'#fff',border:'1px solid #e8e9eb',borderRadius:14}}>
            <h2 style={{fontWeight:900,fontSize:24,color:'#101114',marginBottom:8}}>Registered</h2>
            <p style={{color:'#777b84',fontSize:15,marginBottom:20}}>Your membership is pending payment confirmation.</p>
            <Link href="/admin/registrations" style={{background:'#ed253b',color:'#fff',padding:'10px 20px',borderRadius:10,fontWeight:800,fontSize:13,textDecoration:'none'}}>Admin Panel →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
