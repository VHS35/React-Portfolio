import React from 'react';

export default function Form() {
  return (
    <div className =' text-center'>
      <p> Contact Me</p>
      <form className="form">
      <div className="form-group col-md-9">
      <label className ='col-md-3 control-label'>Your Email</label>
        <input
          // value={email}
          // name="email"
          // onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className="form-group col-md-9">
        <label className ='col-md-3 control-label'>Your Name</label>
        <input
          // value={name}
          // name="name"
          // onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <div className="form-group col-md-9">
      <label className ='col-md-3 control-label'>Message</label>
      <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
        </div>
        </div>
        <button type="button">Submit</button>
      </form>
     
        </div>
  );
}

