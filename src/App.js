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
            // for (let i = data.length - 1; i >= 0; i--) {
            //   if (data[i].company.name === 'Romaguera-Crona') {
            //     VIPs.push(data[i]);
            //   } else {
            //     regularclients.push(data[i]);
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
        <h1>Quick PR code review</h1> 
      </header>
      <ClientList
        regulars={clients}
        vips={vips}
      />
    </div>
  );
}

export default App;
