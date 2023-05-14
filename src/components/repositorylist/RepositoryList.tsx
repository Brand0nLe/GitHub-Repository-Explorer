import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface RepositoryListProps {
  repositories: any[];
  onBookmark: (repository: any) => void;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories, onBookmark }) => {
  const handleBookmark = (repository: any) => {
    onBookmark(repository);
  };

  return (
    <div>
      {repositories.map((repo: any) => (
        <Card key={repo.id} className="mb-3">
          <Card.Body>
            <Card.Title>{repo.name}</Card.Title>
            <Card.Text>{repo.description}</Card.Text>
            <Card.Text>
              Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
            </Card.Text>
            <Button variant="primary" onClick={() => handleBookmark(repo)}>
              Bookmark
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RepositoryList;
