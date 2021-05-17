import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClientList from './components/ClientList';

const getClients = async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            // Alternative
            // var regularclients = [];
            // var VIPs = [];
            // for (let i = clients.length - 1; i >= 0; i--) {
            //   if (clients[i].roles.includes('research')) {
            //     VIPs.push(clients[i]);
            //   } else {
            //     regularclients.push(clients[i]);
            //   }
            // }

            console.log('clients : ', data);

            var regularclients = data
                                    .map(function (m) {
                                        if (m.company.name == 'Romaguera-Crona') return null;
                                        return m;
                                    })
                                    .filter(function (m) {
                                        if (m !== null) return true;
                                        return false;
                                    });
            
            var VIPs = data
                        .filter(function filterResearcher(m) {
                            return (m.company.name == 'Romaguera-Crona') ? true : false;
                        });
            
            return [regularclients, VIPs]; 
        });
  };

const App = () => {
  const [clients, setClients] = React.useState([]);
  const [vips, setVIPs] = React.useState([]);

  getClients().then(([c, v]) => {
    setClients(c);
    setVIPs(v);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ClientList
        regulars={clients}
        vips={vips}
      />
    </div>
  );
}

export default App;
