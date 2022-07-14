import styled from "styled-components";

import guy from "../../img/background/13.png";
import { Texture } from "../../components/Texture";

const Header = () => {
  return (
    <HeaderStyle>
      <Texture />
      <div className="container">
        <h1>bushido</h1>
        <div className="subtitle">
          <h2 className="text-stroke">7077</h2>
          <p>進化は、ハイブリッド種 が地球の表面を支配する 新しい時代に近づいています</p>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  padding-top: clamp(170px, 30vw, 500px);
  padding-bottom: clamp(100px, 30vw, 200px);
  background-image: url(${guy});
  background-repeat: no-repeat;
  background-position: 41vw bottom;
  background-size: contain;
  opacity: 0.75

  .subtitle {
    display: inline-flex;
    align-items: flex-start;
    flex-wrap: wrap;

    ::after {
      content: "";
      width: 100%;
      height: 20px;
      border-top: 1px solid #f1f1f1;
      border-right: 1px solid #f1f1f1;
    }
  }
  h2 {
    margin-right: 40px;
  }
  p {
    font-family: "NotoSansJP Bold";
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-width: 312px;
  }
`;
