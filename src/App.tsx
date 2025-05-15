import './index.css';
import ExtensionList from './components/ExtensionList';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040918] to-[#091540] text-white px-4 py-6">
      <Header />
      {/* To test that images are working correctly */}
      <img src="/favicon-32x32.png" alt="" className='h-30 w-30'/>
      <section className="max-w-6xl mx-auto mt-10">
        <ExtensionList />
      </section>
    </div>
  );
}

export default App;
