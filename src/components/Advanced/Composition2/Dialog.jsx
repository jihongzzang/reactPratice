import React, { useState } from 'react';

export default function Dialog({ title, description, button }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            zIndex: 99,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            border: '1px solid black',
            padding: 24,
            backgroundColor: 'white',
          }}
        >
          {typeof title === 'string' ? <h1>{title}</h1> : title}
          {typeof description === 'string' ? (
            <h5>{description}</h5>
          ) : (
            description
          )}
          {typeof button === 'string' ? (
            <button
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => setIsOpen(false)}
            >
              {button}
            </button>
          ) : (
            <div onClick={() => setIsOpen(false)}>{button}</div>
          )}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'lightGrey',
          }}
        />
      )}
    </>
  );
}
