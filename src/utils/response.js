const Response = () => {

    const successMessage = (code, message, data) => { return { code, message, data } };

    const errorMessage = (code, message) => { return { code, message, data: null } };

    const pagination = (
        code, message, data, page, totalItem, size, sortBy,sortType, keyword = ''
    ) => {
        return {
            code,
            message,
            keyword,
            data,
            paging: {
                page,
                totalPages: Math.ceil(totalItem / size),
                totalRows: totalItem,
                rowsPerPage: size
            },
            order : {
                sortBy,
                sortType
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