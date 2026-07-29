import { useAuthStore } from '~~/stores/auth'

/**
 Central `$fetch` helper for API communication.
 * Automatically adds the base URL and Bearer authorization token.
 */
export function useApi() {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.apiBase as string,

    onRequest({ options }) {
      const auth = useAuthStore()
      if (auth.token) {
        const headers = new Headers(options.headers)
        headers.set('Authorization', `Bearer ${auth.token}`)
        headers.set('Accept', 'application/json')
        options.headers = headers
      }
    },

    onResponseError({ response }) {
      // If the token has expired (401 error), automatically log out the user.
      if (response.status === 401) {
        const auth = useAuthStore()
        auth.logout()
        navigateTo('/login')
      }
    },
  })
}
