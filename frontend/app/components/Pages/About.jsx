import styles from './_Pages.scss';
import React, {Component} from 'react';
export default class About extends Component {
  render = () => {
    return (
      <div>
        <h2 className={styles.pageTitle}>About this</h2>
        <p className={styles.lead}>This is an example CRUD app, powered by React, axios &amp; webpack with ES6/7
          syntax.</p>
      </div>
    );
  };
}
