import { Suspense } from 'react';
import Hero from './components/Hero';
import KeyProducts from './components/KeyProducts';
import Impact from './components/Impact';

export default function Home() {
  return (
    <>
      <Hero />
      <KeyProducts />
      <Impact />
    </>
  );
}
