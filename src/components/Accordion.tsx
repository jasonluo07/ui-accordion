import type { ISection } from '@/types';
import { useState } from 'react';

import styles from './Accordion.module.css';

type AccordionProps = {
  sections: ISection[];
};

const Accordion = ({ sections }: AccordionProps) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  return (
    <div className={styles.accordion}>
      {sections.map(({ title, content }) => {
        const isOpen = openSections.has(title);

        const handleToggle = () => {
          const newOpenSections = new Set(openSections);
          isOpen ? newOpenSections.delete(title) : newOpenSections.add(title);
          setOpenSections(newOpenSections);
        };

        return (
          <div key={title}>
            <div onClick={handleToggle}>
              {title} <span className={styles.icon} />
            </div>
            <div hidden={!isOpen}>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
