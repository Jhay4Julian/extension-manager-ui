import './index.css';
import ExtensionList from './components/ExtensionList';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040918] to-[#091540] text-white px-4 py-6">
      <Header />

      <section className="max-w-6xl mx-auto mt-10">
        <ExtensionList />
      </section>
    </div>
  );
}

export default App;
