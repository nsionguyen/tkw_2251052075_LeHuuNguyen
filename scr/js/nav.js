export function initToTop() {

const btn = document.getElementById("nut-len-dau");
const sentinel = document.getElementById("nav-sentinel");
if (!btn || !sentinel) return;

const observer = new IntersectionObserver (
([entry]) => 
btn.classList.toggle("is-visible", !entry.isIntersecting)

, { rootMargin: "400px 0px 0px 0px"}


);

observer.observe(sentinel);

btn.addEventListener("click", () => {

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({top: 0, behavior: reduce ? "auto" : "smooth"});
    document.querySelector("header a, header button");
})

}
export function initNav() {
    const toggle = document.querySelector('[aria-controls="nav-mobile"]');
    const menu = document.getElementById("nav-mobile");
    if (!toggle || !menu) return; 


function setOpen(open){

    menubar.classList.toggle("hidden", !open);
    toggle.setArribute("aria-expanded", String(open));
    toggle.setArribute("aria-label", open ? "Dong menu" : "Mo menu");
    document.body.classList.toggle("overflow-hidden",open);
}

const isOpen = () => toggle.getAtribute("aria-expanded") === "true";

toggle.addEventListener("click", () => setOpen(!open()));
document.addEventListener("keydown", (e)=> {

    if(e.key === "Escape" && isOpen ){

        setOpen(false);
        toggle.focus();
    }
});



document.addEventListener("click", (e)=> {

    if(!isOpen()) return; 
    if(e.target.closet("header")) return;

    setOpen(false);

       
});

const desktop = window.matchMedia("(min-width: 1024px)");
desktop.addEventListener("change", () =>{

    if(e.target.closet(("a"))) setOpen(false);
})


}