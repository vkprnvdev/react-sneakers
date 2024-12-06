import axios from 'axios'
import { Items } from './app.interface'

export class API {
	api: string

	constructor(api: string) {
		this.api = api
	}

	public setFromApi = async (array: Function) => {
		try {
			await axios.get(this.api).then(res => {
				array(res.data)
			})
		} catch (err) {
			console.error(err)
		}
	}

	public post = async (obj: Items) => {
		try {
			const res = await axios.post(this.api, obj)
			await axios.patch(this.api + res.data.id, { id: obj.id })
			return res.data
		} catch (err) {
			console.error(err)
		}
	}

	public patch = async (id: number, obj: object) => {
		try {
			const res = await axios.patch(this.api + id, obj)
			return res.data
		} catch (err) {
			console.error(err)
		}
	}

	public delete = async (id: number) => {
		try {
			const res = await axios.delete(this.api + id)
			return res.data
		} catch (err) {
			console.error(err)
		}
	}
}
