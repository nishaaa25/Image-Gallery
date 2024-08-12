import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import DetailedCard from './components/DetailedCard';

const App = () =>{
  const AppRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/imagedetails/:id",
        element: <DetailedCard/>
      }
    ]
  );
  return (
    <div className="App max-w-[100%] h-screen relative bg-black text-white">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
