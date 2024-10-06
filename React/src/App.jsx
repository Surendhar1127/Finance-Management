// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './Components/Pages/Header';
// import Sidebar from './Components/Pages/SideMenu';
// import Dashboard from './Components/Pages/Dashboard';
// import Transactions from './Components/Sidebar/Transactions';
// import SavingsGoal from './Components/Sidebar/SavingsGoal';
// import Investment from './Components/Sidebar/Investment';
// import Login from './Components/Utils/Login';

// const App = () => {
//   return (
//     <Router>
//       <Header/>
//       <div className="container-fluid">
//         <div className="row">
//           <Sidebar/>
//           <Routes>
//             {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<Navigate to="/dashboard" />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/transactions" element={<Transactions/>} />
//             <Route path="/savings-goal" element={<SavingsGoal />} />
//             <Route path="/investment" element={<Investment />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Pages/Header';
import Sidebar from './Components/Pages/SideMenu';
import Dashboard from './Components/Pages/Dashboard';
import Transactions from './Components/Sidebar/Transactions';
import SavingsGoal from './Components/Sidebar/SavingsGoal';
import Investment from './Components/Sidebar/Investment';
import Login from './Components/Utils/Login';
import Login1 from './Components/Utils/Login1';
import Register from './Components/Utils/Register';

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Routes>
              <Route path='/login' element={<Login />} />
              {/* <Route path='/login' element={<Login1 />} /> */}
              <Route path='/register' element={<Register />} />
              <Route
                path="*"
                element={(
                  <>
                    <Header />
                    <Sidebar />
                    <div className="col flex-grow-1">
                      <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/savings-goal" element={<SavingsGoal />} />
                        <Route path="/investment" element={<Investment />} />
                      </Routes>
                    </div>
                    {/* <Footer /> */}
                  </>
                )}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
