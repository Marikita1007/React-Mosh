import React from 'react';
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {

    let items = [
        'New York',
        'Paris',
        'Tokyo',
        'London',
        'Seoul'
    ];

    const handleSlectItem = (item: string) => {
        console.log(item);
    }


    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSlectItem}/></div>
}

export default App;