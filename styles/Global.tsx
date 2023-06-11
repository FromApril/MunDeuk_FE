import { css, Global } from '@emotion/react';

const globalStyle = css`
  * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

    &:active,
    &:focus {
      outline: 0 !important;
    }

    /* 스크롤 감춤 */
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
  }

  body {
    font-family: 'Apple SD Gothic Neo';
    overflow-x: hidden;
    user-select: none;
  }

  img,
  svg {
    vertical-align: unset;
  }

  svg {
    display: inline-block;
  }
`;

const GlobalStyle = () => {
  // const theme = useTheme();

  return (
    <Global
      styles={css`
        ${globalStyle}
      `}
    ></Global>
  );
};

export default GlobalStyle;
