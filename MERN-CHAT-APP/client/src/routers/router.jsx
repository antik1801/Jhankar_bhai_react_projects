import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ChatPage from '../Pages/ChatPage';

const Router = () => {
    return (
        <div>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/chats" component={ChatPage}></Route>
        </div>
    );
};

export default Router;