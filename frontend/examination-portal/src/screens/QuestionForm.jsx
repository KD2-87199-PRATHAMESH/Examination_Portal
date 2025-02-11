import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import "../styles/QuestionForm.css";

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [image, setImage] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ question, options, correctOption, explanation, image });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="question">
        <Form.Label>Question</Form.Label>
        <InputGroup>
          <InputGroup.Text>Q1.</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </InputGroup>
      </Form.Group>

      {options.map((option, index) => (
        <Form.Group key={index} controlId={`option${index + 1}`}>
          <Form.Label>Option {index + 1}</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Enter option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </Form.Group>
      ))}

      <Form.Group controlId="correctOption">
        <Form.Label>Correct Option</Form.Label>
        <Form.Control
          as="select"
          value={correctOption}
          onChange={(e) => setCorrectOption(Number(e.target.value))}
        >
          <option value={0}>Select option</option>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image (Optional)</Form.Label>
        <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>

      <Form.Group controlId="explanation">
        <Form.Label>Explanation</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter explanation here"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Question
      </Button>
      <Button variant="secondary" type="reset">
        Clear Question
      </Button>
    </Form>
  );
};

export default QuestionForm;