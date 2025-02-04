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

export async function loginFaculty(reqBody) {
    try {
        const url = createUrl('faculty/signin')
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

export async function getSubjects(courseId) {
    try {
        const url = createUrl('subject/course/' + courseId)
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function updateFaculty(reqBody) {
    try {
        const url = createUrl('faculty')
        const response = await axios.put(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function getFacultySubject(reqBody) {
    try {
        const url = createUrl('subject/faculty/'+reqBody)
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
