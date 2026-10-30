export default function GalleryPage() {
  const imgs = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    'https://images.unsplash.com/photo-1593079831268-3381b92d8669?w=600&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80'
  ];
  return (
    <section style={{padding:'85px 30px',background:'#090A0D'}}>
      <div style={{maxWidth:1240,margin:'auto',textAlign:'center',marginBottom:56}}>
        <h1 style={{fontFamily:"'Work Sans',system-ui,sans-serif",fontWeight:900,fontSize:'clamp(28px,3vw,42px)',lineHeight:1.1,letterSpacing:'-.045em',color:'#fff'}}>Gallery</h1>
      </div>
      <div style={{maxWidth:1240,margin:'auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
        {imgs.map((src,i)=> <img key={i} src={src} alt="Gym" loading="lazy" style={{width:'100%',borderRadius:14,objectFit:'cover',height:260,boxShadow:'0 8px 30px rgba(0,0,0,.4)'}} />)}
      </div>
    </section>
  );
}
