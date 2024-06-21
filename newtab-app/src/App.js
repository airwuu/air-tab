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
        <div className="max-w-3xl flex flex-col items-center justify-self-center space-y-4 rounded-xl p-8 bg-white/15 shadow-lg">
          <h1 className="text-white text-7xl ">Welcome back, Air</h1>
          <Search className=""></Search>
          <div className="shortcuts flex flex-row space-x-3">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
