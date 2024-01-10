class PharmacyService {
    //get all pharmacies, used to make call in getServerSideProps for dashboard page
    async getPharmacies (access: string): Promise<GetPharmaciesResponse> {
        const response: GetPharmaciesResponse = await fetch(`${process.env.DJANGO_API_URL}/core/pharmacies`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access}`
            }
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return []
            }
        })
        return response
    }

    //get the information of one pharmacy, used in getServerSideProps for pharmacy page
    async getPharmacy (id: string, access: string): Promise<GetPharmacyResponse> {
        const response: GetPharmacyResponse = await fetch(`${process.env.DJANGO_API_URL}/core/pharmacies/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access}`
            }
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return {}
            }
        })
        return response
    }

    async updateEnrolledPharmacy (id: string, enrollmentData: PharmacyEnrollmentData): Promise<UpdatePharmacyResponse> {
        const response: UpdatePharmacyResponse = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacy/${id}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(enrollmentData)
        }).then(r => r.json())
        return response
        
    }

}

export default new PharmacyService()