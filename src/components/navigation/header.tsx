import ContentContainer from "../ContentContainer";
import EnkaLogo from "./EnkaLogo";

export default function Header() {
  return (
    <header>
      <ContentContainer>
        <div className="flex justify-between items-center h-20 py-4">
          <div className="w-32">
            <EnkaLogo />
          </div>
          <div className="flex items-center gap-12">
            <nav>
              <ul className="flex items-center gap-3">
                <li>Oferta</li>
                <li>Realizacje</li>
                <li>Kontakt</li>
              </ul>
            </nav>
            <div>Telefon</div>
            <div>
              Języki
              <ul>
                <li>PL</li>
                <li>EN</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>
      <nav></nav>
    </header>
  );
}
