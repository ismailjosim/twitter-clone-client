import { graphql } from '../../gql'

export const verifyUserGoogleTokenMutation = graphql(`
	#graphql
	mutation verifyUserGoogleToken($token: String!) {
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
