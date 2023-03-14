import React from 'react';

export default function Footer() {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Thanks for visiting</h4>
      <address>
          <a href="mailto:vsantiago13@hotmail.com">vsantiago13@hotmail.com</a>

        </address>
          
       <p >
        < a href = "https://github.com/VHS35 ">
       Github: VHS35
       </a>
      </p>
    </div>
    
    </footer>
  );
};