import React from 'react';

function Footer() {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      borderTop: '1px solid #ccc',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-betwen',
      alignItems: 'center',
      fontSize: '14px',
      color: '#555',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    //   boxSizing: ''
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        &copy; 2024 Kali Lincox
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          color: '#666',
          textDecoration: 'none',
          marginLeft: '10px'
        }}>
          Privacy Kita
        </a>
        <a href="#" style={{
          color: '#666',
          textDecoration: 'none',
          marginLeft: '10px'
        }}>
          Terms of Service
        </a>
      </div>
    </div>
  );
}

export default Footer;