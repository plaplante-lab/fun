const ClientList = ({regulars, vips}) => {
    const clientslistitems = regulars.map((client) => <li>{client.name}</li>);
    const vipslistitems = vips.map((client) => <li>{client.name}</li>);

    return (
        <div>
            <h2>VIPs List</h2>
            <ul style={{
                color: "red"
            }}>
                {vipslistitems}
            </ul>
            <h2>Client List</h2>
            <ul style={{
                color: "green"
            }}>
                {clientslistitems}
            </ul>
        </div>
    );
}

export default ClientList;