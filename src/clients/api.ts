import { GraphQLClient } from 'graphql-request'

const getAccessToken = (): string | null => {
	if (typeof window === 'undefined') return null
	return (
		document.cookie
			.split('; ')
			.find((row) => row.startsWith('access_token_client='))
			?.split('=')[1] ?? null
	)
}

export const graphqlClient = new GraphQLClient(
	process.env.NEXT_PUBLIC_GRAPHQL_URL!,
	{
		headers: (): Record<string, string> => {
			const token = getAccessToken()
			if (!token) return {}
			return { Authorization: `Bearer ${token}` }
		},
	},
)
