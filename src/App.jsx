import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 gap-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center px-4">
        HELLO KBTG
      </h1>
      <Datepicker />
    </div>
  )
}

export default App
