import axios from "axios";
import { createUrl } from "../utils";

export async function getDegree() {
    try {
        const url = createUrl('faculty/degrees')
        const response = await axios.get(url)
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function getSpecilization() {
    try {
        const url = createUrl('faculty/specs')
        const response = await axios.get(url)
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function onRegister(reqBody) {
    try {
        debugger
        const url = createUrl('faculty')
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