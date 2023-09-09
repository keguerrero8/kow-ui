class MessagingService {

    async createRequest (payload) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/requests`, {
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