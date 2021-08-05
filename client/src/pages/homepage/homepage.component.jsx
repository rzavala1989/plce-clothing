import React from 'react';

import Directory from '../../components/directory/directory.component';

import { DirectoryHeader, HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <DirectoryHeader>
      <h1>Welcome to the PLCE</h1>
      <h3>Treat yourself as royalty</h3>
    </DirectoryHeader>

    <Directory />
  </HomePageContainer>
);

export default HomePage;
