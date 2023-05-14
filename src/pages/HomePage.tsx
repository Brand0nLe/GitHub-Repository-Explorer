import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import UserForm from '../components/userform/UserForm';
import RepositoryList from '../components/repositorylist/RepositoryList';
import './HomePage.css'; // Import the CSS file for HomePage styling

const HomePage: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  const handleFormSubmit = async (username: string) => {
    try {
      // Fetch repositories based on username and update the repositories state
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmark = (repository: any) => {
    setFavorites((prevFavorites) => [...prevFavorites, repository]);
  };

  return (
    <Container className="home-page">
      <h1>GitHub Repository Explorer</h1>
      <UserForm onSubmit={handleFormSubmit} />
      <hr />
      <div className="home-page-content">
        <div className="repository-list">
          <h2>Search Results</h2>
          <RepositoryList repositories={repositories} onBookmark={handleBookmark} />
        </div>
        <div className="favorites">
          <h2>Favorite Repositories</h2>
          {/* Render the list of favorite repositories */}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
