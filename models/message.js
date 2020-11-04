const getDb = require('../utils/database').getDb

class Message {
    constructor(name, phone, email, subject, content) {
        this.name = name
        this.phone = phone
        this.email = email
        this.subject = subject
        this.content = content
    }

    save () {
        const db = getDb()
        db.collection('message')
    }
}