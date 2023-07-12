export const styles = {
    FormContainer: {
        marginTop: "50px",
        marginBottom: "50px",
        padding: "50px 5px",
        width: {xs: "80%", sm: "80%", md: "90%"},
        backgroundColor: "rgba(255,255,255,1)", 
        borderRadius: "20px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        gap: {xs: "4rem", sm: "4rem", md: "3rem"}
    },
    InputContainer: {
        margin: "auto", 
        width: {xs: "100%", sm: "100%", md: "60%"}, 
        gap: "2rem", 
        display: "flex", 
        justifyContent: "left", 
        flexDirection: "column"
    },
    PharmacyInsuranceText: {
        textAlign: "center", 
        fontWeight: "bolder", 
        fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"}
    },
    InsuranceFields: {
        margin: "auto",
        width: "100%",
        gap: "2rem", 
        display: "flex", 
        justifyContent: "center", 
        flexDirection: "column"
    },
    PaymentMethodText: {
        fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"},
        fontWeight: "bold"
    },
    ButtonsContainer: {
        margin: "auto", 
        width: "90%", 
        textAlign: "center", 
        display: "flex", 
        justifyContent: "center", 
        gap: "3rem", 
        flexDirection: {xs: "column", sm: "column", md: "row"}
    },
    FillableTitle: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem", lg: "3rem"},
        margin: "-2rem",
        "@media (max-width: 1200px)": {fontSize: "3rem"}
    },
    FillableSubtitle: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"},
        marginBottom: "-1rem"
    },
    FillableHours: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: {xs: "0.8rem", sm: "0.8rem", md: "1.1rem"},
        marginBottom: "-1.5rem",
        color: "#009ffb",
    },
    FillableHoursNote: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: {xs: "0.7rem", sm: "0.7rem", md: "0.9rem"},
        marginBottom: "1rem",
        color: "#009ffb",
        width: "65vw",
        alignSelf: "center"
    },
    HelpSubtitle: {
        textAlign: "flex-start",
        alignSelf: "center",
        color: "#009ffb",
        fontWeight: "900",
        width: "85%",
        marginTop: "-1.5rem"
    },
    HelpToggle: {
        alignSelf: "flex-end",
        marginBottom: "-2rem",
        marginRight: "1rem",
        fontWeight: "900",
        color: "red",
    },
    MedDetails: {
        marginLeft: "2rem",
        marginRight: "2rem",
        marginTop: "-1.5rem",
        color: "#009ffb",
        fontWeight: "900"
    },
    PayHelp: {
        alignSelf: "center",
        color: "#009ffb",
        marginLeft: "2rem",
        marginRight: "2rem",
        fontWeight: "900",
        marginTop: "0.25rem"
    },
    InsuranceHelp: {
        marginLeft: "2rem",
        marginRight: "2rem",
        color: "#009ffb",
        fontWeight: "900",
        alignSelf: "center",
        marginTop: "-1.5rem"
    },
    MobileNumber: {
        marginTop: "-1.5rem",
        marginBottom: "-2rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        color: "#009ffb",
        fontWeight: "900"
    },
    UserType: {
        fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"},
        fontWeight: "bold",
        marginTop: "-2rem"
    },
  }