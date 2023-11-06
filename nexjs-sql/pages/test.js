import React from 'react'
import { useEffect, useState } from 'react'
const items = 'baseball bat, cap, yo-yo, fireworks';


export default function csr() {
  const [state, setState] = useState([]);
  async function getData() {
    const res = await fetch('api/sql');
    const data = await res.json();
    const itemsArr = items.split(',');

    setState(data);
  }
  useEffect(() => {
    getData();
  }, [])
    console.log(state.result)
  return (
    <div>
      {state.map(function (home, index) {
          return <div key={index}>
            {home.post_title}
            {home.ID}
            {home.guid}
            {home.post_type}
            </div>;
        })}

      <div>
    </div>

    </div>
  
  )
}