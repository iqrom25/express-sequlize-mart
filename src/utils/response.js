const Response = () => {

    const successMessage = (code, message, data) => { return { code, message, data } };

    const errorMessage = (code, message) => { return { code, message, data: null } };

    const pagination = (
        code, message, data, page, totalItem, size
    ) => {
        return {
            code,
            message,
            data,
            paging: {
                page,
                totalPages: Math.ceil(totalItem / size),
                totalRows: totalItem,
                rowsPerPage: size
            }
        }
    };

    return {
        successMessage,
        errorMessage,
        pagination
    };
};

export default Response;