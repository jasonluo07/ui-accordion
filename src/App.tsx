import Accordion from '@/components/Accordion';
import { SECTIONS } from '@/constants';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Accordion sections={SECTIONS} />
    </div>
  );
};

export default App;
