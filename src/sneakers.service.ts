import axios from 'axios'
import { Items } from './app.interface'

class SneakersService {
	api = 'https://271ea91daf28a18b.mokky.dev/items/'

	public getData() {
		return axios.get<Items[]>(this.api)
	}
}
export const sneakersService = new SneakersService()
