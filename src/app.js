import React from "react";
import Modal from "common/modal";


const App = ({ children }) => (
    <div>
        <Modal />
        {children}
    </div>
);
export default App;