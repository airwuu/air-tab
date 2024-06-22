// import logo from './logo.svg';
import './App.css';
import Card from './components/card.jsx'
//import Nav from './components/nav.jsx'
import Search from './components/search.jsx'
import StarryBackground from './components/stars.jsx'

function App() {
  return (
    <>
      {/* bg-gradient-to-tl from-blue-300 to-slate-600*/}
      {/* Fill in entire screen */}
      <div className="app min-h-screen min-w-screen bg-[url('vecteezy_ai-generated-sky-with-earth-background_42197372.jpg')] bg-cover flex items-center justify-center font-mono">
        {/* Moving star component */}
        <StarryBackground/>
        {/* Container for middle items */}
        <div className="flex opacity-0 animate-fadeinbounceup max-w-4xl flex-col items-center justify-self-center space-y-4 rounded-xl p-8 bg-gray-300/45 shadow-lg">
        {/* Text */}
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-solid border-r-8 border-r-white text-white text-6xl font-bold max-w-fit">Welcome back, Air</h1>
          {/* Search */}
          <div className="animate-fade opacity-0 min-w-full" style={{animationDelay: '0.5s'}}><Search className=""></Search></div>
          {/* Cards */}
          <div className="shortcuts flex flex-row space-x-3">
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.5s'}}><Card/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.6s'}}><Card/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.7s'}}><Card/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.8s'}}><Card/></div>
          </div>
          
        </div>
      </div>
      {/* Cloud */}
      <div className="fixed inset-0 w-full h-5/5 bg-[url('clouds.png')] bg-cover opacity-30 animate-wiggle"/>
    </>
  );
}

export default App;
