import { graphql } from '../../gql'

export const verifyUserGoogleTokenQuery = graphql(`
	#graphql
	query verifyUserGoogleToken($token: String!) {
		verifyGoogleToken(token: $token) {
			accessToken
			refreshToken
			user {
				id
				name
				email
				phone
				profileImage
			}
		}
	}
`)
