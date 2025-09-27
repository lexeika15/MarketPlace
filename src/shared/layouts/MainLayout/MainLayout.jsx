import styles from './MainLayout.module.css';
import Header from '../../components/Header/Header';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Footer from '../../components/Footer/Footer';

function MainLayout({ headerProps, children }) {
  return (
    <div className={styles.layoutRoot}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <Header {...headerProps} />
          {children}
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;