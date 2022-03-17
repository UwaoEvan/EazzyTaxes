import './App.css';

import Header from './components/Header/Header';
import FillingStatus from './components/FillingStatus/FillingStatus';
import Names from './components/Names/Names'
import Question from './components/Question/Question';
import StandardDeduction from './components/StandardDeduction/StandardDeduction';
import Dependents from './components/Dependents/Dependents';
import Attach from './components/Attach/Attach';
import Refund from './components/Refund/Refund';
import AmountOwed from './components/AmountOwed/AmountOwed';
import ThirdParty from './components/ThirdParty/ThirdParty';
import SignHere from './components/SignHere/SignHere';
import Paid from './components/Paid /Paid';
import Footer from './components/Footer/Footer'

export default function App() {
  return (
      <form className="App">
        <Header/>
        <FillingStatus/>
        <Names/>
        <Question/>
        <StandardDeduction/>
        <Dependents/>
        <Attach/>
        <Refund/>
        <AmountOwed/>
        <ThirdParty/>
        <SignHere/>
        <Paid/>
        <Footer/>
      </form>
  );
}

