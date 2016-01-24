import styles from './_App.scss';
import React from 'react';

import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class App extends React.Component {

  render = () => {
    return (
      <div className={styles.app}>
        <Body children={this.props.children} />
        <Footer />
      </div>
    );
  }
}
