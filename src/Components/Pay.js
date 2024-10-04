import React, { useState } from 'react'
import './Pay.scss';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Login</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Login</h2>
            <form>
              <label>
                Username
                <input type="text" placeholder="Enter Email ID or Mobile Number" required />
              </label>
              <label>
                Password
                <input type="password" placeholder="Enter Password" required />
              </label>
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#">SignUp</a></p>
            <p>Facing trouble logging in? <a href="#">Get Help</a></p>
            <p>Already registered via WhatsApp? <a href="#">Continue Here</a></p>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginModal