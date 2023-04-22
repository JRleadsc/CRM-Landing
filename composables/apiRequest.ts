import { useRuntimeConfig } from '#app'
/**
 * @param { string } method method of you want to request.
 * @param { string } url url of you want to request without first of string ( / )
 * @param { string } data if your method is ( post ) you can send data
 * @param { object } params send params. EX: {page: 1, model: 6}
 *
 * @example <caption>Example usage.</caption>
 * api('get', login(), formdata.value)
 * // return: response of api
 * // error: check console return a error log
 */

export const apiRequest = async (method: string = 'get', url: string = '', data: string = '', params: object = {}) => {
  if (url !== null && (method === 'get' || method === 'post' || method === 'put' || method === 'patch' || method === 'delete')) {
    const config = useRuntimeConfig()

    const res = await $fetch(`${url}`, {
      // async onResponseError({ request, response, options }) {
      //   if (url !== '/auth/jwt/create/' && response.status === 401) {
      //     window.location.replace('/login')
      //   }
      // },
      method: method.toUpperCase(),
      baseURL: config.public.apiUrl,
      body: method.toUpperCase() !== 'GET' ? data : null,
      query: params,
      // headers: useAuth().authenticated
      //   ? {
      //     Authorization: `Bearer ${useAuth().token}`
      //   }
      //   : {}
    })

    // TODO auto Refresh token

    return res
  } else {
    throw 'Have problem in api request'
  }
}
