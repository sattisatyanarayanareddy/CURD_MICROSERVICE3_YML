# User

## Operations

### createAnswers

```http
POST /createAnswers
```

CreateAnswers

### deleteAnswers

```http
DELETE /deleteAnswers/{ques_id}
```

deleteAnswers

### getAnswers

```http
GET /getAnswers
```

GetAnswers

### updateAnswers

```http
PUT /UpdateAnswers/{ques_id}
```

UpdateAnswers

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
