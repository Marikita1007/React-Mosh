import React from 'react';
import Message from "./Message";
import Alert from './components/Alert';

function App() {
    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
        </div>
    );
}

export default App;