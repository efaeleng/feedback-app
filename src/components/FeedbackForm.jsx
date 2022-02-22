import React, { useState } from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form>
        <div className="input-group">
          <input
            onChange={handleTextChange} 
            type="text" 
            value={text}
            placeholder="Leave us a review" />

          <button
            type="submit"
            // onClick={handleTextChange}
            style={{ padding: '5px' }}
          >
            send
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
