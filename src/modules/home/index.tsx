import { About } from 'src/containers/About';
import { Article } from 'src/containers/Article';
import { Hero } from 'src/containers/Hero';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Article />
    </>
  );
};
