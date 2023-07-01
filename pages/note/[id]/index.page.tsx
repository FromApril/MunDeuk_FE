import { css } from '@emotion/react';

import PageContainer from '@/components/layouts/PageContainer';
import NoNote from '@/components/pages/noteDetail/NoNote';
import UserContent from '@/components/pages/noteDetail/UserContent';
import UserContentBottom from '@/components/pages/noteDetail/UserContentBottom';
import UserInfo from '@/components/pages/noteDetail/UserInfo';

import useNoteDetailPage from './logics';

export default function NoteDetailPage() {
  const { note, goHomePage, subscribeNote } = useNoteDetailPage();

  if (!note) {
    return <NoNote onClick={goHomePage} />;
  }

  console.log(note);

  return (
    <PageContainer css={containerCss}>
      <UserInfo note={note} />
      <UserContent note={note} />
      <UserContentBottom onMessage={goHomePage} onSave={subscribeNote} />
    </PageContainer>
  );
}

const containerCss = css`
  background-color: #000;
`;
