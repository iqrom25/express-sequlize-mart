const Response = () => {

    const successMessage = (code, message, data) => { return { code, message, data } };

    const errorMessage = (code, message) => { return { code, message, data: null } };


    return {
        successMessage,
        errorMessage
    };
};

export default Response;