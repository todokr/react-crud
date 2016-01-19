import styles from './_App.scss';
import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  return {
    users: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState();

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getUsers();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <Body users={this.state.users}/>
        <Footer />
      </div>
    );
  }
}
