import { LinearProgress, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';

function List({ loading, contacts }) {
    const Paperstyle = {
        background: '#f2f2f2',
        padding: '20px',
        margin: '20px auto',
        position: 'relative',
        width: '350px'
    }
    const imgStyle = {
        maxHeight: '64px',
        margin: '10px 20px 0 0',
        borderRadius: '50%',
    }
    console.log(contacts);
    return (
        <div>
            <Paper style={Paperstyle}>
                {loading ? <LinearProgress /> : (
                    contacts.data.map((contact) => {
                        return (
                            <div style={{ display: 'flex', borderBottom: '1px solid #999' }}>
                                <img style={imgStyle} src={contact.picture} alt={contact.firstName} />
                                <div>
                                    <h4>{contact.firstName} {contact.lastName}</h4>
                                    <p>{contact.email}</p>
                                </div>
                            </div>
                        )
                    })
                )}
            </Paper>
        </div >
    )
}

export default List;