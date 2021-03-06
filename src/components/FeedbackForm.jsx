import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import Ratingselect from './Ratingselect';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    }else if (text !== "" && text.trim().length <= 10){
      setMessage("Text must atleast be 10 characters")
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
      <h2>How would you rate your service with us?</h2>
      <Ratingselect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange} 
            type="text" 
            value={text}
            placeholder="Leave us a review" />

          <Button
            type="submit"
            isDisabled={btnDisabled}
            // onClick={handleTextChange}
          >
            Send
          </Button>
        </div>

          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
