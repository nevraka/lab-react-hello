import './index.css';
// import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon3.png';
import ironhack from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

function App() {
  const Header = () => {
    return (
      <div class="header">
        <div class="header-icon">
          <img class="header-image" src={ironhack} alt="ironhack" />
          <img class="header-image" src={menu} alt="menu" />
        </div>
        <div class="message-button">
          <h1 class="say-hello-message">Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library,become a
            super Ninja developer
          </p>
          <div class="awasome">Awesome!</div>
        </div>
      </div>
    );
  };

  const Declarative = () => {
    return (
      <div>
        <img src={icon1} alt="1a" />
        <div>React makes it painless to create interactive UIs</div>
      </div>
    );
  };
  const Components = () => {
    return (
      <div>
        <img src={icon2} alt="2b" />
        <div>Build encapsulated components that manage their state</div>
      </div>
    );
  };
  const SingleWay = () => {
    return (
      <div>
        <img src={icon3} alt="3c" />
        <div>A set of immutable values are passed to the component's.</div>
      </div>
    );
  };

  const Jsx = () => {
    return (
      <div>
        <img src={icon4} alt="4d" />
        <div>Statically-typed'design to run on modern browsers.</div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div class="components">
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
      </div>
    </div>
  );
}

export default App;
