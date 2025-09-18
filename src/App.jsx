import Sidebar from './components/Sidebar';
import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span>🔔</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👨‍💼</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Profile</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* New Courses */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-6">New Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Geography Course */}
                <div className="bg-orange-100 rounded-xl p-6">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Geography</h3>
                  <p className="text-sm text-gray-600 mb-4">12 lessons</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>

                {/* JavaScript Course */}
                <div className="bg-purple-100 rounded-xl p-6">
                  <div className="w-16 h-16 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">JavaScript Course</h3>
                  <p className="text-sm text-gray-600 mb-4">15 lessons</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>

                {/* Photography Course */}
                <div className="bg-blue-100 rounded-xl p-6">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Photography Course</h3>
                  <p className="text-sm text-gray-600 mb-4">8 lessons</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* My Courses */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
                <button className="text-purple-600 hover:text-purple-700">View All</button>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Course name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Start</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-purple-600">🎨</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Web Design</div>
                            <div className="text-sm text-gray-500">10 lessons</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">May 12</td>
                      <td className="px-6 py-4 text-gray-600">4.8</td>
                      <td className="px-6 py-4 text-gray-600">Elementary</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600">⚙️</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Development Basics</div>
                            <div className="text-sm text-gray-500">8 lessons</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">May 14</td>
                      <td className="px-6 py-4 text-gray-600">4.4</td>
                      <td className="px-6 py-4 text-gray-600">Intermediate</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                            <span className="text-pink-600">🐍</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Data with Python</div>
                            <div className="text-sm text-gray-500">5 lessons</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">May 17</td>
                      <td className="px-6 py-4 text-gray-600">4.6</td>
                      <td className="px-6 py-4 text-gray-600">Intermediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Profile with Calendar */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Esther Howard ✓</div>
                  <div className="text-sm text-gray-500">Elementary</div>
                </div>
              </div>
              <Datepicker />
            </section>

            {/* Homework Progress */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-6">Homework progress</h3>
              <div className="space-y-4">
                <div className="bg-purple-600 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎨</span>
                      <span className="font-medium">Styling with CSS</span>
                    </div>
                    <span className="text-sm">→</span>
                  </div>
                  <div className="text-sm opacity-90">12 tasks</div>
                  <div className="bg-white bg-opacity-20 rounded-full h-2 mt-3">
                    <div className="bg-white rounded-full h-2 w-3/4"></div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">💻</span>
                      </div>
                      <span className="font-medium text-gray-800">Basics of programming</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">8 tasks</div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 rounded-full h-2 w-3/5"></div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 text-sm">☕</span>
                      </div>
                      <span className="font-medium text-gray-800">Learn to Program in Java</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">10 tasks</div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 rounded-full h-2 w-1/4"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
