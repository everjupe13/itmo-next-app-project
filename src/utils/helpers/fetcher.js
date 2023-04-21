import { ENV } from '@/configs/environment'

export const fetcher = url =>
  fetch(`${ENV.API_HOST}${url}`).then(res => res.json())
