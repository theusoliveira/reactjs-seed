import React from 'react';

import TitleComponent from '../../components/Title';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <TitleComponent title="Welcome to ReactJS Seed!" />
    </Container>
  );
}

export default Dashboard;
