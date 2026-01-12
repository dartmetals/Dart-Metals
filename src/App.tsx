import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CallToAction from './components/CallToAction';
import CompanyOverview from './components/CompanyOverview';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import WhyChooseUs from './components/WhyChooseUs';
import Header from './components/Header';
import Logistics from './components/Logistics';
import QualityControl from './components/QualityControl';
import IndustriesServed from './components/IndustriesServed';
import SustainabilityCompliance from './components/SustainabilityCompliance';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={
      <div className="w-full">  
        <HeroSection/>
        <CompanyOverview/>
        <ServicesPreview/>
        <QualityControl/>
        <Logistics/>
        <IndustriesServed/>
        <WhyChooseUs/>
        <SustainabilityCompliance/>
        <CallToAction/>
       </div> }/>
       </Routes> 
        <Footer/>       
        </Router>
    </>
  );
}

export default App;