import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	link: new HttpLink({
		uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clue6kg7o000008ks4i5d57yc/master",
	}),
	cache: new InMemoryCache(),
});
