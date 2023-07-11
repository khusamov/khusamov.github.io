import {Endpoints} from '@octokit/types'

export type Gihub = Endpoints['GET /users/{username}/repos']['response']['data'][number];
export type TUserInfo = Endpoints['GET /users/{username}']['response']['data'];

export const repoListAddress = (per_page: number) => `https://api.github.com/users/khusamov/repos?per_page=${per_page}`
export const userInfoAddress = 'https://api.github.com/users/khusamov'

