import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface Props {
  children: ReactNode;
  node: ReactNode;
  url: any;
}

export const LinkCoverLeft = (props: Props) => {
  const exitTransition = {
    length: 0.5,
    zIndex: 1,
    trigger: ({ node }) => {
      exitTransition.exitTrigger(node);
      node.style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: coverToLeft 1.2s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 2,
    trigger: ({ node }) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: coverFromLeft 0.7s cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink
        to={props.url}
        exit={exitTransition}
        entry={entryTransition}
      >
        {props.children}
      </TransitionLink>
    </>
  );
};

export default LinkCoverLeft;
