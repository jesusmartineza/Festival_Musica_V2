function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".contenido-festival");document.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const n=document.createElement("PICTURE");n.innerHTML=`\n    <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n    <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="imagen galeria">\n`,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("PICTURE");t.innerHTML=`\n    <source srcset="build/img/gallery/full/${e}.avif" type="image/avif">\n    <source srcset="build/img/gallery/full/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${e}.jpg" alt="imagen galeria">\n`;const n=document.createElement("DIV");n.classList.add("modal"),n.onclick=cerrarModal;const a=document.createElement("BUTTON");a.textContent="CERRAR",a.classList.add("btn-cerrar"),a.onclick=cerrarModal,n.appendChild(t),n.appendChild(a);const c=document.querySelector("body");c.classList.add("overflow-hidden"),c.appendChild(n)}function cerrarModal(){const e=document.querySelector(".modal");e.classList.add("fade-out"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),500)}function resaltarEnlace(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let n="";e.forEach((e=>{const t=e.offsetTop,a=e.clientHeight;window.scrollY>=t-a/2&&(n=e.id)})),t.forEach((e=>{e.getAttribute("href")==="#"+n?e.classList.add("active"):e.classList.remove("active")}))}))}function scrollNav(){docuemnt.querySelectorAll(".navegacion-princiapl a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()}));