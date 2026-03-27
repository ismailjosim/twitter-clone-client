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

export const getCurrentUserQuery = graphql(`
	#graphql
	query getCurrentUser(){
  		getCurrentUser {
    id
    email
    name
    phone
    profileImage

}

	}
	`)
