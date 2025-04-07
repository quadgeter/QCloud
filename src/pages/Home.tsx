import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  color: white;
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

const Home: React.FC = () => {
  const concepts = [
    {
      title: 'Superposition',
      description: 'Quantum bits (qubits) can exist in multiple states simultaneously, unlike classical bits that are either 0 or 1.'
    },
    {
      title: 'Entanglement',
      description: 'When qubits become entangled, the state of one directly influences the state of another, regardless of distance.'
    },
    {
      title: 'Interference',
      description: 'Quantum states can interfere with each other, allowing for complex computations and pattern recognition.'
    },
    {
      title: 'Decoherence',
      description: 'The process by which quantum systems lose their quantum properties due to interaction with the environment.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <Title>Welcome to QCloud</Title>
        <Subtitle>Your gateway to understanding quantum computing</Subtitle>
        <Button to="/qcloud">Try Quantum Computing</Button>
      </HeroSection>

      <Section>
        <h2>What is Quantum Computing?</h2>
        <p>
          Quantum computing is a revolutionary approach to computation that leverages the principles of quantum mechanics
          to perform calculations that would be impossible or impractical for classical computers. By harnessing quantum
          phenomena like superposition and entanglement, quantum computers can solve certain problems exponentially faster
          than their classical counterparts.
        </p>
      </Section>

      <Section>
        <h2>Key Concepts</h2>
        <CardGrid>
          {concepts.map((concept, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardTitle>{concept.title}</CardTitle>
              <p>{concept.description}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <h2>Why It Matters</h2>
        <ul>
          <li>Potential to solve complex problems in cryptography, optimization, and material science</li>
          <li>Could revolutionize fields like drug discovery and financial modeling</li>
          <li>Enables new approaches to machine learning and artificial intelligence</li>
          <li>Pushes the boundaries of what's computationally possible</li>
        </ul>
      </Section>
    </HomeContainer>
  );
};

export default Home; 