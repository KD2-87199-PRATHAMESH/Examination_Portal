import axios from "axios";
import { createUrl } from "../utils";

export async function getCourse() {
    try {
        const url = createUrl('student/course')
        const response = await axios.get(url)
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function onRegister(reqBody) {
    try {
        const url = createUrl('student')
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

export async function loginStudent(reqBody) {
    try {
        const url = createUrl('student/signin')
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