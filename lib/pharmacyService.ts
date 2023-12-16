interface GetPharmacyResponse {
    id: number
    name: string
    address: string
    zipcode: string  
    phone_number: string
    contact_name: string
    contact_title: string  
    contact_email: string
    contact_phone_number: string
    isDelivery: boolean  
    additional_language: string
    npi: string
    network: string
    initial_rate: string
    signature: string
    signed_agreement_admin: string  
}

interface UpdatePharmacyResponseSuccess {
    id: number
    name: string
    address: string
    zipcode: string  
    phone_number: string
    contact_name: string
    contact_title: string  
    contact_email: string
    contact_phone_number: string
    isDelivery: boolean  
    additional_language: string
    npi: string
    network: string
    initial_rate: string
    signature: string
    signed_agreement_admin: string  
}

interface UpdatePharmacyValidationErrors {
    additional_language?: string[]
    contact_name?: string[]
    contact_title?: string[]
    contact_email?: string[]
    contact_phone_number?: string[]
    npi?: string[]
    signature?: string[]
    network?: string[]
    initial_rate?: string[]
    signed_agreement_admin?: string[]
    isDelivery?: string[]
}

interface UpdatePharmacyResponseFail {
    error: string | UpdatePharmacyValidationErrors
}

//consider moving this to some other centralized location to be used in PharmacyEnrollmentForm.jsx
interface EnrollmentData {
    additional_language: string
    contact_name: string
    contact_title: string
    contact_email: string
    contact_phone_number: string
    npi: string
    signature: string
    network: string
    initial_rate: string
    signed_agreement_admin: string
    isDelivery: boolean
}


class PharmacyService {

    //get all pharmacies, used to make call in getServerSideProps for dashboard page
    async getPharmacies (access: string): Promise<GetPharmacyResponse[] | []> {
        const response: GetPharmacyResponse[] | [] = await fetch(`${process.env.DJANGO_API_URL}/core/pharmacies`, {
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
    async getPharmacy (id: string, access: string): Promise<GetPharmacyResponse | {}> {
        const response: GetPharmacyResponse | {} = await fetch(`${process.env.DJANGO_API_URL}/core/pharmacies/${id}`, {
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

    async updateEnrolledPharmacy (id: string, enrollmentData: EnrollmentData): Promise<UpdatePharmacyResponseSuccess | UpdatePharmacyResponseFail> {
        const response: UpdatePharmacyResponseSuccess | UpdatePharmacyResponseFail = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacy/${id}`, {
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