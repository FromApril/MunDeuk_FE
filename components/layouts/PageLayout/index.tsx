import React, { PropsWithChildren } from 'react';

import Gnb from '../Gnb';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="border border-opacity-70 m-auto w-[375px] h-[100vh]">
      {children}
      <Gnb />
    </div>
  );
}
