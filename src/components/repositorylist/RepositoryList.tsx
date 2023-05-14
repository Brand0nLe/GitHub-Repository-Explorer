import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    favorites.some((fav) => fav.full_name === repository.full_name);

  const handleFavoriteButtonClick = (repository: any) => {
    if (isFavorite(repository)) {
      onRemoveFromFavorites(repository);
    } else {
      onAddToFavorites(repository);
    }
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
            <div className="repo-details">
              <Card.Text>{repo.description}</Card.Text>
              <Card.Text>
                Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
              </Card.Text>
              {favorites && (
                <Button
                  variant={isFavorite(repo) ? 'danger' : 'primary'}
                  onClick={() => handleFavoriteButtonClick(repo)}
                >
                  {isFavorite(repo) ? 'Remove from Favorites' : 'Add to Favorites'}
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RepositoryList;
