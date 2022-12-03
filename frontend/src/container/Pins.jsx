import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';


import {Navbar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = ({user}) => {
  const[searchTerm, setsearchTerm]= useState('')
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
      </div>
      <div className="h-full">
        <Routes>
            <Route path="/" elemnt={<Feed />} />
            <Route path="/category/:categoryId" elemnt={<Feed />} />
            <Route path="/pin-detail:pinId" elemnt={<PinDetail user={user}/>} />
            <Route path="/create-pin" elemnt={<CreatePin user={user}/>} />
            <Route path="/search" elemnt={<Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} user={user}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Pins
