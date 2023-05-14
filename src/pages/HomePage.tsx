import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import UserForm from '../components/userform/UserForm';
import RepositoryList from '../components/repositorylist/RepositoryList';

const HomePage: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  const handleFormSubmit = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (response.ok) {
        const data = await response.json();
        setRepositories(data);
      } else {
        throw new Error('Failed to fetch user repositories');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>GitHub Repository Explorer</h1>
      <UserForm onSubmit={handleFormSubmit} />
      <hr />
      <RepositoryList repositories={repositories} />
    </Container>
  );
};

export default HomePage;
