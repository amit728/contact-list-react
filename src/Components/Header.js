import React from 'react';
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper style={{ padding: '5px', display: 'flex' }} square elevation={3}>
            <img width="125px" src="https://chop-chop.org/app/uploads/2019/05/logo-react-blue-1.svg" />
            <h1 className="site-name">React Contact List</h1>
        </Paper>
    )
}

export default Header;
