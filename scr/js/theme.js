const KEY = "theme";

export function initTheme() {
  const btn = document.getElementById("nut-nen-toi");
  if (!btn) return;

  const root = document.documentElement;
  const isDark = () => root.classList.contains("dark");





  btn.addEventListener("click", () => {

    root.classList.toggle("dark");
    localStorage.setItem(KEY, isDark() ? "dark" : "light");
  });
  
 window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{

    if(localStorage.getItem(KEY)) return;
    root.classList.toggle("dark", e.matches);
 })
}

