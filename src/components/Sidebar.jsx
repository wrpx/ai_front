const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📚', label: 'Courses', active: false },
    { icon: '💬', label: 'Chats', active: false },
    { icon: '📋', label: 'Grades', active: false },
    { icon: '📅', label: 'Schedule', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-white h-full p-6 border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">🎓</span>
        </div>
        <span className="font-semibold text-lg text-gray-800">Academy</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Premium subscription */}
      <div className="mt-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-3">
            <img src="https://via.placeholder.com/80x80/8B5CF6/FFFFFF?text=👨‍💻" alt="Premium" className="w-full h-full rounded-lg" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Premium subscription</h3>
          <p className="text-sm text-gray-600 mb-4">Buy Premium and get access to new courses</p>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            More detailed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;