import React from 'react';

const NotFound = ({ message }) => (
    <main className="text-white py-28 container text-center space-y-6">
        <h1 className="text-3xl font-bold">Ooops!</h1>
        <p>{message}</p>
    </main>
);

export default NotFound;
