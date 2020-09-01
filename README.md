## Custom Gatsby Transition Link

This is my simple set of transition effects components for the gatsby-transition-link.
You don't need any additional libraries like gsap. All simple animations are written in 
`styles/animations.css`. You can freely customize it and improve.

## How to use

```
import React from 'react';
import LinkFade from '../components/TransitionLinks/LinkFade';

export const Page = () => {
  return (
    <>
        <LinkFade url={'/page-2'}>Link to page-2</LinkFade>
    </>
  );
};

export default Page;
```

## Live demo

https://gatsby-custom-transition-link.netlify.app/
