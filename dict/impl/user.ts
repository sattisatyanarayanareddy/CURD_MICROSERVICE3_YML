import * as t from '../api/user/types'
import { Api } from '../models'

async function createAnswers(request: Api.BODYDATA | undefined): Promise<t.CreateAnswersResponse> {
	throw 'Unimplemented'
}

async function deleteAnswers(quesId: number): Promise<t.DeleteAnswersResponse> {
	throw 'Unimplemented'
}

async function getAnswers(): Promise<t.GetAnswersResponse> {
	throw 'Unimplemented'
}

async function updateAnswers(quesId: number, request: Api.BODYDATA | undefined): Promise<t.UpdateAnswersResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	createAnswers,
	deleteAnswers,
	getAnswers,
	updateAnswers,
}

export default api
