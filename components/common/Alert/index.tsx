// import { css } from '@emotion/react';
import React, { useCallback } from 'react';

// import {
//   AlertOutside,
//   ButtonBox,
//   CancleButton,
//   ConfirmButton,
//   ContentsBox,
//   StyledAlert,
//   Text,
//   Title,
// } from './styles';

export interface AlertProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  msg?: string;
  msgs?: string[];
  type?: number;
  confirmText?: string;
  cancleText?: string;
  onClose?: () => void;
  onAfterClose?: () => void;
  onAfterConfirm?: () => void;
  onAfterCancle?: () => void;
}

function Alert({
  isOpen,
  className,
  children,
  title,
  msg,
  msgs,
  type = 1,
  confirmText,
  cancleText,
  onClose,
  onAfterClose,
  onAfterConfirm,
  onAfterCancle,
}: AlertProps) {
  const handleClose = useCallback(() => {
    // 호환성을 위해 유지
    if (onClose) {
      onClose();
    }

    if (onAfterClose) {
      onAfterClose();
    }
  }, [onClose, onAfterClose]);

  const handleConfirm = useCallback(() => {
    if (onClose) {
      onClose();
    }
    if (onAfterConfirm) {
      onAfterConfirm();
    }
  }, [onClose, onAfterConfirm]);

  const handleCancle = useCallback(() => {
    if (onClose) {
      onClose();
    }

    if (onAfterCancle) {
      onAfterCancle();
    }
  }, [onClose, onAfterCancle]);

  return <div>alert</div>

//   return isOpen ? (
//     <AlertOutside>
//       <StyledAlert className={className}>
//         <ContentsBox isOneText={!title && (Boolean(msg) || msgs?.length === 1)}>
//           {title && <Title>{title}</Title>}
//           {msg && <Text>{msg}</Text>}
//           {msgs?.map((msg, idx) => (
//             <Text key={'text-' + idx}>{msg}</Text>
//           ))}
//           {children && children}
//         </ContentsBox>

//         {/* 하단버튼 타입 */}
//         {type === 1 && (
//           <ButtonBox>
//             <ConfirmButton onClick={handleConfirm}>
//               {confirmText ?? '확인'}
//             </ConfirmButton>
//           </ButtonBox>
//         )}
//         {type === 2 && (
//           <ButtonBox>
//             <CancleButton
//               css={css`
//                 width: 50%;
//               `}
//               onClick={handleCancle}
//             >
//               {cancleText ?? '취소'}
//             </CancleButton>
//             <ConfirmButton
//               css={css`
//                 margin-left: 50%;
//                 width: 50%;
//               `}
//               onClick={handleConfirm}
//             >
//               {confirmText ?? '확인'}
//             </ConfirmButton>
//           </ButtonBox>
//         )}
//       </StyledAlert>
//     </AlertOutside>
//   ) : null;
// }

export default React.memo(Alert);
