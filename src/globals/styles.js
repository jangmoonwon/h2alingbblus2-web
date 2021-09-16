import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GowunBatang-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cafe24Oneprettynight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
}

    @font-face {
    font-family: 'NanumSquareExtraBold';
    font-weight: 800;
    src: url(NanumSquareR.eot);
    src: url(NanumSquareR.eot?#iefix) format('embedded-opentype'),
      url(NanumSquareR.woff) format('woff'),
      url(NanumSquareR.ttf) format('truetype');
}


    body {
        margin: 0 auto;
    }
`;
