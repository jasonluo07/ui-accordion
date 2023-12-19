import Accordion from '@/components/Accordion';

import styles from './App.module.css';

import { SECTIONS } from '@/constants';

const App = () => {
  return (
    <div className={styles.app}>
      <Accordion sections={SECTIONS} />
    </div>
  );
};

export default App;
