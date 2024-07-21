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
      <div className="-z-10 min-h-screen min-w-screen bg-[url('vecteezy_ai-generated-sky-with-earth-background_42197372.jpg')] bg-cover flex items-center justify-center font-mono">
        {/* Moving star component */}
        <div className="z-10"><StarryBackground/></div>
        {/* Container for middle items */}
        <div className="flex z-20 opacity-0 animate-fadeinbounceup max-w-4xl flex-col items-center justify-self-center space-y-4 rounded-xl p-8 bg-gray-300/45 shadow-lg">
        {/* Text */}
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-solid border-r-8 border-r-white text-white text-6xl font-bold max-w-fit">Welcome back, Air</h1>
          {/* Search */}
          <div className="animate-fade opacity-0 min-w-full" style={{animationDelay: '0.5s'}}><Search className=""></Search></div>
          {/* Cards */}
          <div className="shortcuts flex flex-row space-x-3">
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.5s'}}><Card title="Github" imageURL={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} websiteURL="https://github.com/airwuu"/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.6s'}}><Card title="Reddit" imageURL={'https://images.squarespace-cdn.com/content/v1/5c5554d316b64061c6f8a20d/1630949829757-WXNOUZ8R4QQCXMIY4YMG/What-Is-The-Reddit-Logo-Called.png?format=1500w'} websiteURL="https://www.reddit.com/"/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.7s'}}><Card title="Roblox" imageURL={'https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png'} websiteURL="https://www.roblox.com/home"/></div>
            <div className="animate-dropin opacity-0" style={{animationDelay: '0.8s'}}><Card title="Youtube" imageURL={'https://www.pngall.com/wp-content/uploads/13/Logo-Youtube-PNG-Pic.png'} websiteURL="https://www.youtube.com/"/></div>
          </div>
          
        </div>
      </div>
      {/* Cloud */}
      <div className="fixed z-10 inset-0 w-full h-5/5 bg-[url('clouds.png')] bg-cover opacity-30 animate-wiggle"/>
    </>
  );
}

export default App;
