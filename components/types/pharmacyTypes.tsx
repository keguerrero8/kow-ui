interface Pharmacy {
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
    signed_agreement_stamp: string
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

interface PharmacyEnrollmentData {
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

//HTTP Responses - include success and fail
type GetPharmaciesResponse = Pharmacy[] | []
type GetPharmacyResponse = Pharmacy | {}
type UpdatePharmacyResponse = Pharmacy | UpdatePharmacyResponseFail

//Props
interface PharmaciesProps {
    pharmacies: GetPharmaciesResponse
}

interface PharmacyProps {
    pharmacy: Pharmacy
}