import React from 'react';

export default function Footer() {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Thanks for visiting</h4>
      </div>
    </footer>
  );
};