
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Main from './Layouts/Main';
import AllQuiz from './Component/AllQuiz/AllQuiz';

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
          path: "/quiz/:quizid",
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element:<AllQuiz></AllQuiz>
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
    {path:"*", element: <div>This is error:404</div>}
  ]);

  return (
    <div className="App">  
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
