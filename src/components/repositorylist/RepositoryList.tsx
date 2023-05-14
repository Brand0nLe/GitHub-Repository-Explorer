import React from 'react';
import Card from 'react-bootstrap/Card';

interface RepositoryListProps {
  repositories: any[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
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
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RepositoryList;
