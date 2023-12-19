import type { ISection } from '@/types';
import { clsx } from 'clsx';
import { useState } from 'react';

import styles from './Accordion.module.css';

type AccordionProps = {
  sections: ISection[];
};

const Accordion = ({ sections }: AccordionProps) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  return (
    <div className={styles.accordion}>
      {sections.map(({ title, value, content }) => {
        const isOpen = openSections.has(value);

        const handleToggle = () => {
          const newOpenSections = new Set(openSections);
          isOpen ? newOpenSections.delete(value) : newOpenSections.add(value);
          setOpenSections(newOpenSections);
        };

        return (
          <div key={value}>
            <div onClick={handleToggle}>
              {title} <span className={clsx(styles.icon, { [styles.iconRotated]: isOpen })} />
            </div>
            <div hidden={!isOpen}>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
