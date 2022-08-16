import bycrypt from 'bcrypt';

const hashPassword = async (password) => {
    return await bycrypt.hash(password, 10);
}

const comparePassword = async (password, hashedPassword) => {
    return await bycrypt.compare(password, hashedPassword);
}

export { hashPassword, comparePassword };