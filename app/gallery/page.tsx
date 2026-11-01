export default function GalleryPage() {
  const imgs = [
    '/images/gym-strength-new.jpg',
    '/images/gym-3.jpg',
    '/images/gym-4.jpg',
    '/images/gym-3.jpg'
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
