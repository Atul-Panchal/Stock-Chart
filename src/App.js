import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { checkAuth } from './action';
import HomePage from './Pages/HomePage';
import Footer from './uielements/footer/Footer';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import ChartMain from './charts/ChartMain';
import Navbar from './uielements/Navbar';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import StartTradeOne from './Pages/StartTradeOne';
import StartTradeTwo from './Pages/StartTradeTwo';
import StartTradeThree from './Pages/StartTradeThree';
import StartTradeOneAlgoOne from './Pages/StartTradeOneAlgoOne';
import StartTradeOneAlgoTwo from './Pages/StartTradeOneAlgoTwo';
import StartTradeOneAlgoThree from './Pages/StartTradeOneAlgoThree';
import StartTradeTwoAlgoOne from './Pages/StartTradeTwoAlgoOne';
import StartTradeTwoAlgoTwo from './Pages/StartTradeTwoAlgoTwo';
import StartTradeTwoAlgoThree from './Pages/StartTradeTwoAlgoThree';
import StartTradeThreeAlgoOne from './Pages/StartTradeThreeAlgoOne';
import StartTradeThreeAlgoTwo from './Pages/StartTradeThreeAlgoTwo';
import StartTradeThreeAlgoThree from './Pages/StartTradeThreeAlgoThree';
import AlgoPage from './Algo/AlgoPage';
import creatStrategy from './Algo/CreatStrategy/CreatStrategy';
import DeployedStatus from './Algo/Deployed/DeployedStatus';
import UpdateStrategy from './Algo/CreatStrategy/UpdateStrategy';
import TermsOfUse from './Pages/TermsOfUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RiskDisclosurer from './Pages/RiskDisclosurer';
import Screenerpage from './Pages/Screener/ScreenerPage';

function App(props) {
  const [condition, setCondition] = useState(null);
  useEffect(() => {
    const isauth = async () => {
      await props.checkAuth();
    };
    isauth();
  }, [props]);

  useEffect(() => {
    const setisauthenticate = () => {
      if (props.auth === null) {
        setCondition(null);
      } else if (props.auth === false) {
        setCondition(false);
      } else {
        setCondition(true);
      }
    };
    setisauthenticate();
  }, [props.auth]);

  let router;

  if (condition === false) {
    router = (
      <Switch>
        <Route path='/about' component={HomePage} exact />
        <Route path='/' component={ChartMain} exact />
        <Route path='/authenticate' component={LoginPage} />
        <Route path='/forgetpassword' component={ForgetPasswordPage} />
        <Route path='/termsOfuse' component={TermsOfUse} />
        <Route path='/privacyPolicy' component={PrivacyPolicy} />
        <Route path='/riskDisclosurer' component={RiskDisclosurer} />
        <Redirect to='/' exact />
      </Switch>
    );
  } else {
    router = (
      <Switch>
        <Route path='/' component={ChartMain} exact />
        <Route path='/dashboard' component={DashboardPage} exact />
        <Route path='/holdings' component={Dashboard} exact />
        <Route path='/algos' component={AlgoPage} exact />
        <Route path='/algos/creatstrategy' component={creatStrategy} exact />
        <Route
          path='/getnotification/:strategyId/:userId'
          component={DeployedStatus}
          exact
        />
        <Route path='/update/strategy/:id' component={UpdateStrategy} exact />
        <Route path='holdings' component={UpdateStrategy} exact />
        <Route path='/starttrade1' component={StartTradeOne} exact />
        <Route path='/starttrade2' component={StartTradeTwo} exact />
        <Route path='/starttrade3' component={StartTradeThree} exact />
        <Route path='/starttrade1/algo1' component={StartTradeOneAlgoOne} />
        <Route path='/starttrade1/algo2' component={StartTradeOneAlgoTwo} />
        <Route path='/starttrade1/algo3' component={StartTradeOneAlgoThree} />
        <Route path='/starttrade2/algo1' component={StartTradeTwoAlgoOne} />
        <Route path='/starttrade2/algo2' component={StartTradeTwoAlgoTwo} />
        <Route path='/starttrade2/algo3' component={StartTradeTwoAlgoThree} />
        <Route path='/starttrade3/algo1' component={StartTradeThreeAlgoOne} />
        <Route path='/starttrade3/algo2' component={StartTradeThreeAlgoTwo} />
        <Route path='/starttrade3/algo3' component={StartTradeThreeAlgoThree} />
        <Route path='/screener-layout' component={Screenerpage} />
        <Redirect to='/' exact />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main>{router}</main>
      <Footer />
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { checkAuth })(App);
