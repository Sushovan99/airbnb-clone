import { Tabs } from './Tabs';
import { TabPanel } from './TabPanel';
import styles from './BigSearch.module.css';

export const BigSearchForm: React.FC = () => {
  return (
    <form className={styles.form} method="get" role="search">
      <Tabs />
      <TabPanel />
    </form>
  );
};
