import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import background from "./assets/gradientBackground.png";
import Header from './Component/Header';
import AddTask from './Component/AddTask';
import TodoList from './Component/TodoList';
import Login from './Pages/Login';
import Footer from './Component/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from './contexts/theme.context';
import { useTaskContext } from './contexts/TaskContext';

const Home = () => {

      const [showLogin, setShowLogin] = useState(false);

      const { darkMode } = useTheme();
      const { showAddTask } = useTaskContext();

      return (
            <Router>
                  <div className={darkMode ? "dark" : ""}>
                        <div
                              className="min-h-screen bg-white w-full dark:bg-black flex flex-col transition-colors duration-300 bg-cover bg-center"
                              style={{ 
                                    backgroundImage: `url(${background})` 
                              }}
                        >
                              <Navbar
                                    onLogin={() => setShowLogin(true)}
                                    showLogin={showLogin}
                              />

                              {showLogin && <Login onClose={() => setShowLogin(false)} />}

                              <main className="flex-grow">
                                    <Header />

                                    {showAddTask && (<AddTask /> )}

                                    <TodoList />
                              </main>

                              <Footer />
                        </div>
                  </div>
            </Router>
      )
}

export default Home;
