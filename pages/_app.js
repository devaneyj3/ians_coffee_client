import Layout from "../components/layout";
import Amplify from "aws-amplify";

import awsExports from "../src/aws-exports";
import { UserProvider } from "@auth0/nextjs-auth0";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReduxProvider } from "../helper/redux/storeReducer";

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
	return (
		<ReduxProvider>
			<UserProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</UserProvider>
		</ReduxProvider>
	);
}

export default MyApp;
