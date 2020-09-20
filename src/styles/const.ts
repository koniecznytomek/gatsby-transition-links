import { css } from 'styled-components';

export const color = {
  grey: '#EDEDED',
  white: '#fff',
  black: '#202020',
};

export const mq = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1800px',
};

export const font = {
  normal: css`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1px;

    @media (max-width: ${mq.sm}) {
      font-size: 16px;
      line-height: 24px;
    }
  `,
};

export const media = {
  xs: (...a: any) => css`
    @media (max-width: ${mq.xs}) {
      ${css(a)}
    }
  `,
  sm: (...a: any) => css`
    @media (max-width: ${mq.sm}) {
      ${css(a)}
    }
  `,
  md: (...a: any) => css`
    @media (max-width: ${mq.md}) {
      ${css(a)}
    }
  `,
  lg: (...a: any) => css`
    @media (max-width: ${mq.lg}) {
      ${css(a)}
    }
  `,
  xl: (...a: any) => css`
    @media (max-width: ${mq.xl}) {
      ${css(a)}
    }
  `,
  hover: (...a: any) => css`
    @media not all and (hover: none) {
      ${css(a)}
    }
  `,
};
