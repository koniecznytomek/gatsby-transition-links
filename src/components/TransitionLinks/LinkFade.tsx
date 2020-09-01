import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface Props {
  children: ReactNode;
  node: ReactNode;
  url: any;
}

export const LinkFade = (props: Props) => {
  const exitTransition = {
    length: 0.8,
    zIndex: 2,
    trigger: ({ node }) => {
      exitTransition.exitTrigger(node);
      node.style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: slideFadeOut 0.8s ease forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: slideFadeIn 0.8s ease forwards;'
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

export default LinkFade;
