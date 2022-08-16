import Response from "../../utils/response.js";

const UserController = (userService) => {

    const { registerNewUser, findAllUser} = userService();


    const create = async (req, res) => {

        try {

            const newUser = await registerNewUser(req.body);
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', newUser));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    const list = async (req, res) => {

        try {

            const users = await findAllUser();
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', users));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    

    return {
        create,
        list
    };

};

export default UserController;