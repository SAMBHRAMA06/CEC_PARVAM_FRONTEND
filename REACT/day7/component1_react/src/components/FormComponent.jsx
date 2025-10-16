import React from 'react'

export default function FormComponent({ text, value,arr }) {
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
            />
        </form>
        <h1>{text}</h1>
        <p>{value}</p> 
        <input type="number" name='' id='' value={value}/>
        <p>{arr}</p>
    </div>
  );
}
