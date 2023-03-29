const generateMsg = text => {
    return {
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMsg }