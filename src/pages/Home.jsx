import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'/images/backgroundimage.jpeg'})` }}>
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-black/25 bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Raw Radicals
        </h1>
      </div>
    </div>
  );
};

export default Home;
