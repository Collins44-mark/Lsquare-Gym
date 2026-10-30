export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const links = [
    {label:'Dashboard',href:'/admin'},
    {label:'Registrations',href:'/admin/registrations'},
    {label:'Members',href:'/admin/members'},
    {label:'Payments',href:'/admin/payments'},
    {label:'Plans',href:'/admin/plans'},
    {label:'Reports',href:'/admin/reports'},
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:'260px 1fr',minHeight:'80vh',background:'#090A0D'}}>
      <aside style={{background:'#101114',padding:24,color:'#fff'}}>
        <div style={{fontWeight:900,fontSize:18,letterSpacing:'-.04em',marginBottom:24}}>Admin</div>
        <nav style={{display:'flex',flexDirection:'column',gap:10}}>
          {links.map(l=> <a key={l.href} href={l.href} style={{color:'#c9c9ce',textDecoration:'none',fontSize:13,fontWeight:600,padding:'6px 10px',borderRadius:8,display:'block',transition:'background .2s'}}>{l.label}</a>)}
        </nav>
      </aside>
      <main style={{padding:30}}>{children}</main>
    </div>
  );
}
