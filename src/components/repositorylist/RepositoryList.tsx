import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RepositoryList.css';

interface RepositoryListProps {
  repositories: any[];
  favorites: any[];
  onAddToFavorites: (repository: any) => void;
  onRemoveFromFavorites: (repository: any) => void;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  favorites,
  onAddToFavorites,
  onRemoveFromFavorites,
}) => {
  const isFavorite = (repository: any) =>
    favorites.some((fav) => fav.id === repository.id);

  const handleFavoriteButtonClick = (repository: any) => {
    if (isFavorite(repository)) {
      onRemoveFromFavorites(repository);
    } else {
      onAddToFavorites(repository);
    }
  };

  const renderRepoDescription = (description: string) => {
    if (!description) {
      return (
        <p>
          Sorry, this user did not include a description for this repository. You can click on the link to learn more
          about their project.
        </p>
      );
    }
    return <Card.Text>{description}</Card.Text>;
  };

  return (
    <div>
      {repositories.map((repo: any) => (
        <Card key={repo.id} className="mb-3">
          <Card.Body>
            <Button
              variant="link"
              className="repo-name"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </Button>
            {renderRepoDescription(repo.description)}
            <Card.Text>
              Language: {repo.language} | Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
            </Card.Text>
            {favorites && (
              <Button
                className={isFavorite(repo) ? 'btn-custom-danger' : 'btn-custom-primary'}
                onClick={() => handleFavoriteButtonClick(repo)}
              >
                {isFavorite(repo) ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RepositoryList;
