// import logo from './logo.svg';
import './App.css';
import Card from './components/card.jsx'
//import Nav from './components/nav.jsx'
import Search from './components/search.jsx'

function App() {
  return (
    <>
      {/* <Nav className="absolute"></Nav> */}
      <div className="app min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-200 flex items-center justify-center font-mono">
        {/*  */}
        <div className="flex opacity-0 animate-fadeinbounceup max-w-3xl flex-col items-center justify-self-center space-y-4 rounded-xl p-8 bg-white/20 shadow-lg">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-solid border-r-8 border-r-white text-white text-7xl font-bold">Welcome back, Air</h1>
          <div className="animate-fade opacity-0 min-w-full" style={{animationDelay: '0.5s'}}><Search className=""></Search></div>
          <div className="shortcuts flex flex-row space-x-3">
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.5s'}}><Card></Card></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.6s'}}><Card></Card></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.7s'}}><Card></Card></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.8s'}}><Card></Card></div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
