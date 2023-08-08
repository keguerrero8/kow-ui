class PharmacyService {

    async getPharmacies () {
        const response = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacies`).then(r => r.json())
        return response
    }

    async getPharmacy (id) {
        const response = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacies/${id}`).then(r => r.json())
        return response
    }

    async updateEnrolledPharmacy (id, obj) {
        let error = false
        const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/pharmacies/${id}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                error = true
                return r.json()
            }
        })
        return error? {errors: response} : response
    }

}

export default new PharmacyService()