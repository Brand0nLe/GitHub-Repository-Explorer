import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface UserFormProps {
  onSubmit: (username: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>GitHub Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default UserForm;
