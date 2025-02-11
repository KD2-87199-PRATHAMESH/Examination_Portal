import axios from "axios";
import { createUrl } from "../utils";

export async function postQuestion(reqBody) {
    try {
        const url = createUrl('question/')
        const response = await axios.post(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}
export async function updateQuestion(reqBody) {
    try {
        const url = createUrl('question/')
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