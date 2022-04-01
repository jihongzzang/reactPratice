import React from 'react';
import State from '../components/Advanced/Hooks/State';
import Reducer from '../components/Advanced/Hooks/Reducer';
import WelcomeDialog from '../components/Advanced/Composition/WelcomeDialog';
import Dialog from '../components/Advanced/Composition2/Dialog';
import ThankYouDialog from '../components/Advanced/Composition2/ThankYouDialog';
import Input from '../components/Advanced/HOC/Input';
import Button from '../components/Advanced/HOC/Button';

const Home = () => {
  return (
    <>
      {/* <State />
      <Reducer />
      <WelcomeDialog />
      <Dialog />
      <ThankYouDialog /> */}
      <Input />
      <Button />
    </>
  );
};

export default Home;
