
import { useQuery } from '@tanstack/react-query'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { getCurrentUserQuery } from '../graphql/query/user'
import { graphqlClient } from '../clients/api'

type CurrentUserResponse = {
    getCurrentUser: {
        id: string
        name: string
        email: string
        phone?: string
        profileImage?: string
    }
}

const useCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {

            const data = await graphqlClient.request(
                getCurrentUserQuery as unknown as TypedDocumentNode<CurrentUserResponse>
            )
            return data.getCurrentUser
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        retry: false,
    })
}

export default useCurrentUser
