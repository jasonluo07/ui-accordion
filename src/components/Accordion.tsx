import type { ISection } from '@/types';

import styles from './Accordion.module.css';

type AccordionProps = {
  sections: ISection[];
};

const Accordion = ({ sections }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      {sections.map(({ title, content }) => {
        return (
          <div key={title}>
            <div>
              {title} <span className={styles.icon} />
            </div>
            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
