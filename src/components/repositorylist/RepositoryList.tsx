import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface RepositoryListProps {
  repositories: any[];
  onBookmark: (repository: any) => void;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories, onBookmark }) => {
  const [expandedPanel, setExpandedPanel] = useState<number | null>(null);
  const [readmeContent, setReadmeContent] = useState<string>('');

  const handlePanelToggle = (index: number) => {
    if (expandedPanel === index) {
      setExpandedPanel(null);
    } else {
      setExpandedPanel(index);
    }
  };

  useEffect(() => {
    const fetchReadmeContent = async (owner: string, repo: string) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
        if (response.ok) {
          const data = await response.json();
          const decodedContent = window.atob(data.content);
          setReadmeContent(decodedContent);
        } else {
          throw new Error('Failed to fetch README');
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (expandedPanel !== null) {
      const repo = repositories[expandedPanel];
      fetchReadmeContent(repo.owner.login, repo.name);
    }
  }, [expandedPanel, repositories]);

  return (
    <div>
      {repositories.map((repo: any, index: number) => (
        <Card key={repo.id} className="mb-3">
          <Card.Body>
            <Button
              variant="link"
              className="repo-name"
              onClick={() => handlePanelToggle(index)}
              aria-expanded={expandedPanel === index}
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </Button>
            {expandedPanel === index && (
              <div className="repo-details">
                <Card.Text>{repo.description}</Card.Text>
                <Card.Text>
                  Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
                </Card.Text>
                <div className="readme-content">{readmeContent}</div>
                <Button variant="primary" onClick={() => onBookmark(repo)}>
                  Add to Favorites
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RepositoryList;
