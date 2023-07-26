export const styles = {
    MainContainer: {
        margin: "5px auto", 
        width: {xs: "100%", sm: "100%", md: "90%"}, 
        gap: "2rem", 
        display: "flex", 
        justifyContent: "left", 
        flexDirection: "column",
        textAlign: "center",
        minHeight: "100vh",
    },
    ButtonsContainer: {
        margin: "0px auto 40px", 
        width: "100%", 
        textAlign: "center", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        gap: "2rem", 
        flexDirection: {xs: "column", sm: "column", md: "column"}
    },
    FieldsContainer: {
        width: {xs: "100%", sm: "100%", md: "50%"},
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: "2rem",
        "@media (max-width: 1200px)": {width: "75%"}

    }
  }