import React from 'react';
import './Issues.css';

function Issues() {
  return (
    <div className="issues-container">
      <div className="first">
        <form className="modal-content" action="https://formspree.io/f/xknloeba" method="POST">
          <h2>Report Your Concerned Issue</h2>
          <div className="ccontainer">
            <label htmlFor="fname"><b>Name:</b></label>
            <input id="fname" type="text" placeholder="Enter name" name="fname" required />

            <label htmlFor="lname"><b>Role:</b></label>
            <input id="lname" type="text" placeholder="Enter your role" name="lname" required />
            
            <label htmlFor="email"><b>Email:</b></label>
            <input id="email" type="text" placeholder="Enter email" name="email" required />

            <label htmlFor="info"><b>Report your issue:</b></label>
            <textarea id="info" name="message" placeholder="Enter message" required></textarea>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Issues;
