import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    {
      name: 'Solutions',
      dropdown: [
        { name: 'Audio Detection', href: '#audio' },
        { name: 'Video Analysis', href: '#video' },
        { name: 'Image Verification', href: '#image' },
        { name: 'Text Authentication', href: '#text' },
      ],
    },
    {
      name: 'Technology',
      dropdown: [
        { name: 'How It Works', href: '#how-it-works', isHash: true },
        { name: 'AI Models', href: '/ai-research', isHash: false },
        { name: 'Research', href: '/research', isHash: false },
      ],
    },
    {
      name: 'Resources',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'News', href: '/news' },
      ],
    },
    { name: 'Demo', href: '/demo' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">VoiceGuardAI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="nav-link flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link to={item.href} className="nav-link">
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <div
                    className={`nav-dropdown transform ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } transition-all duration-200 ease-in-out`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        (item.name === 'Solutions' || (item.name === 'Technology' && subItem.isHash)) ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/demo" className="btn-primary">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-slate-900 border-t border-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-1">
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  <div className={`pl-4 space-y-1 transition-all duration-200 ${
                    activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    {item.dropdown.map((subItem) => (
                      (item.name === 'Solutions' || (item.name === 'Technology' && subItem.isHash)) ? (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-slate-800 rounded-md"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-slate-800 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link to="/demo" className="block w-full btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;