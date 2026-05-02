const normalizeId = (id) => {
    const parsed = Number(id);

    if (isNaN(parsed)) {
        const error = new Error("Invalid ID");
        error.status = 400;
        throw error;
    }

    return parsed;
};

module.exports = normalizeId;