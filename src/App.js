import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Axios from 'axios';
import List from './Components/List';
import axios from 'axios';

function App() {
    const BASE_URL = "https://dummyapi.io/data/api";
    const APP_ID = "60df4aa7f681a1232025e58b";
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState({ data: [] });

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user?limit=5`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setContacts(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <Header />
            <List loading={loading} contacts={contacts} />
            <Footer />
        </div>
    )
}

export default App;