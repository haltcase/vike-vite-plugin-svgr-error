import React from 'react';
import { Counter } from './Counter.js';

const svgs = import.meta.glob('/assets/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
});

console.log(svgs);
/*
{
  "/assets/1.svg": "/assets/1.svg?react&lang.svg",
  "/assets/2.svg": "/assets/2.svg?react&lang.svg",
  "/assets/logo.svg": "/assets/logo.svg?react&lang.svg"
}
*/

export default function Page() {
  return (
    <>
      {Object.values(svgs).map((Svg, index) => (
        // @ts-ignore
        <Svg key={index} />
      ))}
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
