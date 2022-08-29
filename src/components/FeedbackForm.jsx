import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage("Feedback must be atleast 10 characters");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate our services?</h2>
        {/*@todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message ? <div className="message">{message}</div> : null}
      </form>
    </Card>
  );
}
export default FeedbackForm;
