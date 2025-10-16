import React from 'react'

export default function FormComponent() {
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
    </div>
  )
}
