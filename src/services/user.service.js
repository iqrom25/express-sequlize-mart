const UserService = (UserRepository) => {

    const { create, list} = UserRepository();

    const registerNewUser = async (payload) => {
        try {

            return await create(payload);

        } catch (error) {
            return error.message;
        }
    };

    const findAllUser = async()=>{
        try {
            return await list();
        } catch (error) {
            return error.message;
        }
    }

    return {
        registerNewUser,
        findAllUser
    };
};

export default UserService;