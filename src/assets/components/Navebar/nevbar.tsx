import "./navbarstyles.css";

function Navbar() {
  return (
    <aside className="menu whitebg">
      <div className="main_content menu_content">
      <img src="/src/assets/components/credito/uni.png" alt="LOGO" />

        <nav>
          <ul>
            <li><a href=""> Projeto</a></li>
            <li><a href=""> O que</a></li>
            <li><a href=""> Como</a></li>
            <li><a href="">Onde</a></li>
            <li><a href=""> Dicas</a></li>
            <li><a href=""> Créditos</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;
