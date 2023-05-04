// import styled from '@emotion/styled';

// import { BodyFont2, ButtonFont2 } from '@/styles/fontStyles';
// import zIndexs from '@/styles/zIndexs';

// export const AlertOutside = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: ${zIndexs.alertOutside};

//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #000;
//     opacity: 0.2;
//   }
// `;

// export const StyledAlert = styled.div`
//   background-color: #fff;
//   z-index: 5;
//   position: absolute;
//   top: 50%;
//   left: 50% !important;
//   padding: 32px;
//   padding-bottom: 80px;
//   width: calc(100% - 80px) !important;
//   /* min-height: 210px !important; */
//   transform: translate(-50%, -50%);
//   text-align: center;
//   box-sizing: border-box;
// `;

// export const ContentsBox = styled.div<{ isOneText: boolean }>`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   white-space: pre-wrap;

//   ${({ isOneText }) =>
//     isOneText &&
//     `
//     // min-height: 70px;
//   `}
// `;

// export const Title = styled.p`
//   margin-bottom: 20px;
//   height: 25px;
//   line-height: 25px;
//   font-size: 25px;
//   font-weight: 700;
// `;

// export const Text = styled.p`
//   ${BodyFont2}
//   height: 100%;
//   color: ${({ theme }) => theme.neutral.primary};
// `;

// export const ButtonBox = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
// `;

// export const ConfirmButton = styled.button`
//   ${ButtonFont2}
//   position: absolute;
//   bottom: 0;
//   display: block;
//   width: 100%;
//   height: 48px;
//   color: #fff;
//   background: ${({ theme }) => theme.neutral.primary};
// `;

// export const CancleButton = styled.button`
//   ${ButtonFont2}
//   position: absolute;
//   bottom: 0;
//   display: block;
//   width: 100%;
//   height: 48px;
//   color: #fff;
//   background: ${({ theme }) => theme.neutral.primary};

//   &:after {
//     content: '';
//     background-color: #666;
//     display: block;
//     position: absolute;
//     top: 50%;
//     right: 0;
//     transform: translateY(-50%);
//     width: 1px;
//     height: 14px;
//   }
// `;
