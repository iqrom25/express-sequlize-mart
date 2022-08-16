

const Migration = async (customer) => {

    await customer.sync({alter: true});
};

export default Migration;