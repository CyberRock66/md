import { PropsWithChildren } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './BaseLayout.module.css';

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
