import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Item } from './components/Item';
import { data } from './components/data';
import { Cart } from './components/Cart';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
function App() {
  window.localStorage.setItem("list", JSON.stringify(""));
  const [noOfItems, setNoOfItems] = useState(0);
  let [list, setList] = useState([]);
  function getInfo(e) {
    let dataId = e.target.id;
    console.log(dataId)
    window.localStorage.setItem("itemData", JSON.stringify({ ...data[parseInt(dataId)] }))
    console.log(data[parseInt(dataId)])
  }
  function addItem(e) {
    e.preventDefault()
    let dataId = e.target.id;
    setList((prev) => {
      if (!prev) {
        return [parseInt(dataId)]
      }
      return [...prev, parseInt(dataId)]
    })
  }
  useEffect(() => {
    if (!window.localStorage.getItem("list") && !list) {
      console.log("hi")
    }
    else if (!list.length) {
      setList(JSON.parse(window.localStorage.getItem("list")))
    }
    else {
      window.localStorage.setItem("list", JSON.stringify(list))
    }
    setNoOfItems(() => {
      if (!list) {
        return 0
      }
      else {
        return list.length
      }
    })
  }, [list])
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav num={noOfItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop function={getInfo} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item' element={<Item {...JSON.parse(window.localStorage.getItem("itemData"))} function={addItem} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
