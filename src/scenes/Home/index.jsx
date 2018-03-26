import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryBar from './scenes/Category/components/CategoryBar';
import ListPosts from './scenes/Post';

const Home = () => (
  <div>
    <Header />
    <CategoryBar />
    <ListPosts />
    <Footer />
  </div>
);

export default Home;
