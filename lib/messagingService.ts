interface Payload {
    phone_number: string
    med_name: string
    med_strength: string
    quantity: string
    bin: string
    pcn: string
    rxgroup: string
    isInsurance: boolean
    user_type: string
    isAdmin: boolean
}

interface RequestResponseSuccess {
    id: number
    phone_number: string
    med_name: string
    med_strength: string
    quantity: string
    bin: string
    pcn: string
    rxgroup: string
    isInsurance: boolean
    user_type: string
    created: string
    last_modified: string
    delivery_status: string
}

interface RequestValidationErrors {
    phone_number?: string[]
    med_name?: string[]
    med_strength?: string[]
    quantity?: string[]
    bin?: string[]
    pcn?: string[]
    rxgroup?: string[]
    user_type?: string[]
}

interface RequestResponseFail {
    error: string | RequestValidationErrors
}

type RequestResponse = RequestResponseSuccess | RequestResponseFail

class MessagingService {

    async createRequest (payload: Payload): Promise<RequestResponse> {
        const response: RequestResponse  = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(r => r.json())
        return response
    }

}

export default new MessagingService()