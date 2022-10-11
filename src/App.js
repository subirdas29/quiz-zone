
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Home></Home>
        },
        {
          path: "blogs",
          element:<Blogs></Blogs>
        },
        {
          path: "statistics",
          element:<Statistics></Statistics>
        },
      ]
    },
  ]);

  return (
    <div className="App">  
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
