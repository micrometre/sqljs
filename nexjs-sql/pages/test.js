import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";


export default function AlprImages() {
  const [state, setState] = useState([]);
  async function getData() {
    const res = await fetch('api/test');
    const data = await res.json();
    setState(data);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <>
        <div>
          <h1>Alpr List</h1>
        </div>
      </>

    </div>
  )
}