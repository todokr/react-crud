import styles from './_Body.scss';
import React from 'react';
import UserList from '../UserList/UserList';



let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    users: []
  };

  static propTypes = {
    users: PropTypes.array.isRequired
  };

   render() {
     return (
       <div className={styles.body}>
         <h1 className={styles.header}>React CRUD Sample</h1>
         <p>This is an example CRUD app, powered by React, axios &amp; webpack with ES6/7 syntax.</p>
         <section>
           <h3>Users</h3>
           <UserList users={this.props.users}/>
         </section>
       </div>
     );
   }
}
