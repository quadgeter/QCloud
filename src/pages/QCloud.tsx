import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QCloudContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

const ControlPanel = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button<{ connected?: boolean }>`
  padding: 1rem 2rem;
  background: ${props => props.connected ? props.theme.colors.accent : props.theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-right: 1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ResultCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const algorithms = [
  {
    id: 'shor',
    name: "Shor's Algorithm",
    description: "A quantum algorithm for integer factorization. It can factor large numbers exponentially faster than classical algorithms.",
    mockResult: "Factoring 235,479,660... Output: 19163 x 12289",
    computationTime: "0.0000000187 seconds"
  },
  {
    id: 'grover',
    name: "Grover's Search",
    description: "A quantum search algorithm that can find an item in an unsorted database quadratically faster than classical algorithms.",
    mockResult: "Searching database... Found item at position 7",
    computationTime: "0.00000000189 seconds"
  }
];

const QCloud: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0].id);
  const [result, setResult] = useState<string | null>(null);

  const handleConnect = async () => {
    setIsLoading(true);
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnected(true);
    setIsLoading(false);
  };

  const handleRunAlgorithm = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    const algorithm = algorithms.find(a => a.id === selectedAlgorithm);
    if (algorithm) {
      // Simulate computation delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResult(algorithm.mockResult);
    }
    setIsLoading(false);
  };

  return (
    <QCloudContainer>
      <Header>
        <Title>QCloud Interface</Title>
        <Link to="/">Back to Home</Link>
      </Header>

      <ControlPanel>
        <h2>Algorithm Selection</h2>
        <Select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
        >
          {algorithms.map(algorithm => (
            <option key={algorithm.id} value={algorithm.id}>
              {algorithm.name}
            </option>
          ))}
        </Select>

        <div>
          <Button
            onClick={handleConnect}
            disabled={isConnected || isLoading}
          >
            {isLoading && !isConnected ? (
              <>
                <LoadingSpinner />
                Connecting...
              </>
            ) : isConnected ? (
              'Connected!'
            ) : (
              'Connect to QCloud'
            )}
          </Button>

          <Button
            onClick={handleRunAlgorithm}
            disabled={!isConnected || isLoading}
            connected={isConnected}
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                Running...
              </>
            ) : (
              'Run Algorithm'
            )}
          </Button>
        </div>
      </ControlPanel>

      {result && (
        <ResultCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Results</h3>
          <p>{result}</p>
          <p>Computation Time: {algorithms.find(a => a.id === selectedAlgorithm)?.computationTime}</p>
          <p>{algorithms.find(a => a.id === selectedAlgorithm)?.description}</p>
        </ResultCard>
      )}
    </QCloudContainer>
  );
};

export default QCloud; 