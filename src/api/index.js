export const URL = 'http://api.geekzoo.com.au/api'
export function getAllthreads(http) { return http({url: URL+'/posts', method: 'GET'}) }
export function getThread(http,id) { return http({url: URL+'/posts/' + id, method: 'GET'}) }
