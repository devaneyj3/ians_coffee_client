import Layout from "../components/layout";
import Amplify from "aws-amplify";

import awsExports from "../src/aws-exports";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReduxProvider } from "../helper/redux/storeReducer";

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
	return (
		<ReduxProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ReduxProvider>
	);
}

export default MyApp;
