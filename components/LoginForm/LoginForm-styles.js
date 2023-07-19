export const styles = {
    MainContainer: {
        width: "100%", 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center"
    },
    Container: {
        border: "solid white", 
        borderRadius: "20px", 
        width: {xs: "90%", sm: "400px", md: "500px" }, 
        height: "450px", 
        backgroundColor: "white", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "2rem"
    },
    SignInText: {
        fontSize: {xs: "1.7rem", sm: "2rem", md: "2rem"}
    },
    TextFieldName: {
        width: {xs: "80%", sm: "80%", md: "80%"}, 
        color: "whitesmoke"
    },
    TextFieldPassword: {
        width: {xs: "80%", sm: "80%", md: "80%"}
    },
  }