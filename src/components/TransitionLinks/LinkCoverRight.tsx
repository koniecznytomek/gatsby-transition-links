import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface IProps {
  children: ReactNode;
  node?: ReactNode;
  url: string;
}

export const LinkCoverRight = ({ children, url }: IProps) => {
  const exitTransition = {
    length: 0.5,
    zIndex: 1,
    trigger: ({ node }: IProps) => {
      exitTransition.exitTrigger(node);
      if (node) (node as HTMLElement).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: coverRightOut 1.2s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 2,
    trigger: ({ node }: IProps) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: coverRightIn 0.7s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink to={url} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
    </>
  );
};

export default LinkCoverRight;
