import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   *  {"id": "1",
   *   "username": "taketo",
   *   "displayName": "Taketo Yoshida",
   *     "email": "taketo@example.com",
   *     "profileImageUrl": "/users/1.png",
   *     "description": "Lorem Ipsam is simply dummy text"
   *   }
   */

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}
