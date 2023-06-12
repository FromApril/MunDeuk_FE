import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';

import { textAtom } from '@/recoil/noteWrite/atoms';

export default function TextContent() {
  const [text, setText] = useRecoilState(textAtom);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  return (
    <StyledTextContent>
      <div>
        <textarea placeholder="예)" value={text} onChange={handleChange} />
      </div>
      <div>
        <span>{text.length}/500</span>
      </div>
    </StyledTextContent>
  );
}

const StyledTextContent = styled.div`
  & > div:nth-of-type(1) {
    textarea {
      border: solid 1px #e4e4e4;
      border-radius: 6px;
      padding: 16px;
      width: 100%;
      height: 200px;
      font-size: 14px;
      font-weight: 500;
      color: #111;
    }
  }

  & > div:nth-of-type(2) {
    text-align: right;

    span {
      font-size: 12px;
      color: #949494;
    }
  }
`;
