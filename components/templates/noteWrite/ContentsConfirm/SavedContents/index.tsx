import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import { positionAbsoluteXYCenter } from '@/styles/common';

type SavedContentsProps = {
  today: string;
  isHavePhotos: boolean;
  isHaveMusic: boolean;
};

export default function SavedContents({
  today,
  isHavePhotos,
  isHaveMusic,
}: SavedContentsProps) {
  return (
    <StyledSavedContents>
      <div>{today}</div>
      <div>
        <ContentIcon>
          <Icon name="Text" width={24} height={24} />
        </ContentIcon>
        {isHavePhotos && (
          <ContentIcon>
            <Icon name="Camera" width={24} height={24} />
          </ContentIcon>
        )}
        {isHaveMusic && (
          <ContentIcon>
            <Icon name="Music" width={24} height={24} />
          </ContentIcon>
        )}
      </div>
    </StyledSavedContents>
  );
}

const StyledSavedContents = styled.div`
  ${positionAbsoluteXYCenter};
  text-align: center;

  & > div:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }

  & > div:nth-of-type(2) {
    margin-top: 10px;
    display: inline-flex;
    gap: 0 12px;
  }
`;

const ContentIcon = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  width: 52px;
  height: 52px;

  & > svg {
    ${positionAbsoluteXYCenter};
  }
`;
