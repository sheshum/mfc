module.exports.generateMessage = ( from, text ) => {
    return {
        from: from,
        text: text,
        sentAt: new Date().getTime()
    }
}