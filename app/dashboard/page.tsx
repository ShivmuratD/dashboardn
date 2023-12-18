import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/Card/page';
import Rightbar from '../ui/dashboard/rightbar/page';
import Transactions from '../ui/dashboard/transactions/page';
import Chart from '../ui/dashboard/Chart/page';
import { cards } from '../lib/data';


  const Dashboard = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <Rightbar />
        </div>
      </div>
    );
  };

export default Dashboard;
