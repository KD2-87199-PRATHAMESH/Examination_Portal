import axios from "axios";
import { createUrl } from "../utils";

export async function deleteBySubjectId(reqBody) {
    try {
        const url = createUrl('quiz/'+reqBody)
        const response = await axios.delete(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function updateQuiz(reqBody) {
    try {
        const url = createUrl('quiz/')
        const response = await axios.patch(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function findBySubjectId(reqBody) {
    try {
        const url = createUrl('quiz/subject/'+reqBody)
        const response = await axios.get(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}
