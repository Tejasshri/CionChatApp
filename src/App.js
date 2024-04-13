import React from 'react';
import Navbar from './components/Navbar' ;
import Contacts  from './components/contacts'
import ChatSection from './components/chatSection'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='chat-conteact-container'>
      <Contacts />
        <ChatSection />
      </div>
    </div>
  );
} ;