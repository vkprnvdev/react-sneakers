import axios from 'axios'
import { Items } from './app.interface'

export class API {
	public setFromApi = async (path: string, setCartItems: Function) => {
		try {
			await axios.get(path).then(res => {
				setCartItems(res.data)
			})
		} catch (err) {
			console.error(err)
		}
	}

	public post = async (path: string, obj: Items) => {
		try {
			const res = await axios.post(path, obj)
			await axios.patch(path + res.data.id, { id: obj.id })
			return res.data
		} catch (err) {
			console.error(err)
		}
	}

	public patch = async (path: string, id: number, obj: object) => {
		try {
			const res = await axios.patch(path + id, obj)
			return res.data
		} catch (err) {
			console.error(err)
		}
	}

	public delete = async (path: string, id: number) => {
		try {
			const res = await axios.delete(path + id)
			return res.data
		} catch (err) {
			console.error(err)
		}
	}
}
