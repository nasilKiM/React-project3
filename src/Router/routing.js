import LandingPage from 'Page';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	// {
	//     path: 'result',
	//     element: <DetailPage />,
	// },
]);

export default router;
