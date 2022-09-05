import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';

import logo from '../logo.svg';


export const Navigation = () => {
    return (
      <Suspense fallback={ <span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                      {
                        routes.map((r)=>(
                        <li key={ r.to }>
                            <NavLink to={ r.to } className={ ({ isActive }) => isActive ? 'nav-active' : '' } >{ r.name }</NavLink>
                        </li>
                          ))
                      }
                    </ul>
                </nav>


                <Routes>
                  {
                    routes.map(({path,Component})=>(
                        <Route path={ path } element={ <Component /> } key={ path }/>
                      ))
                  }
            
                    <Route path="/*" element={ <Navigate to={ routes[0].to }  replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
        </Suspense>
    )
}