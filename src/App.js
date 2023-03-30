import { RouterProvider } from 'react-router-dom';
import router from 'Router/routing';
import GlobalStyles from 'Style/global';
import { theme } from 'Style/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
