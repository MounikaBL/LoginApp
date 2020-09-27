import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="home-div">
                <div className="header">
                    <h1>Hi {user.firstName}!</h1>
                    <p className="logout">
                        <Link className="logout" to="/login">Logout</Link>
                    </p>
                </div>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user) => {
                            return (
                                <li key={user.id}>
                                    <div>{user.name}</div>
                                    <div>{user.email}</div>
                                    <div>{user.phoneNo}</div>
                                </li>
                            );
                        }
                        )}
                    </ul>
                }

            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };