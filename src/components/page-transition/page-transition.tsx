import { type ParentComponent } from 'solid-js';
import { Motion, type Options } from '@motionone/solid';

type PageTransitionKey = 'fadeIn' | 'book';

type PageTransitionProps = {
  type?: PageTransitionKey;
};

const 페이지_애니메이션: Record<PageTransitionKey, Options> = {
  fadeIn: {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
    transition: { duration: 0.3 },
  },
  book: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.05 } },
    transition: { duration: 0.1 },
    exit: { opacity: 0, x: -100 },
  },
};

export const PageTransition: ParentComponent<PageTransitionProps> = (props) => (
  <Motion.div {...페이지_애니메이션[props.type || 'fadeIn']}>{props.children}</Motion.div>
);
