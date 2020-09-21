## Custom Gatsby Transition Link

This is my simple set of transition effects components for the **gatsby-transition-link** plugin.
You don't need any additional libraries like gsap. All simple animations are written in 
`styles/animations.css`. You can freely customize it and improve.

## Usage

```js
import React from 'react';
import LinkFade from '../components/TransitionLinks/LinkCustom';

export const Page = () => {
  return (
    <>
        <LinkCustom url={'/page-2'} effect="fadeUp" lenght={0.5}>Link to page-2</LinkCustom>
    </>
  );
};

export default Page;
```

#### Props

|Props|Values|Sample
|:---|:---|---|
|effect|fade, fadeUp, fadeDown, slideLeft, slideRight, slideUp, slideDown| effect="fade"
|lenght|[number]|length={0.5}|

## Predefined components

If you want, you can use predefined components witch constant params:

`<LinkFade url={'/'}>`

`<LinkFadeUp url={'/'}>`

`<LinkFadeDown url={'/'}>`

`<LinkSlideLeft url={'/'}>`

`<LinkSlideRight url={'/'}>`

`<LinkSlideUp url={'/'}>`

`<LinkSlideDown url={'/'}>`

`<LinkCoverRight url={'/'}>`

`<LinkCoverLeft url={'/'}>`

## Live demo

https://gatsby-custom-transition-link.netlify.app/
