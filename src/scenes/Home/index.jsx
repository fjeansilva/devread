import React from 'react';
import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';
import CategoryBar from './scenes/Category/components/CategoryBar';
import ListPosts from './scenes/Post';

const Home = () => (
  <div>
    <Header>
      <TopBar />
    </Header>
    <CategoryBar />
    <ListPosts />
    <Footer />
  </div>
);


export default Home;
