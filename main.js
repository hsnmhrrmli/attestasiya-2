class Message {
    constructor(author, send_date, short, messages = []) {
        this.author = author;
        this.send_date = send_date;
        this.short = short;
        this.messages = messages;
    }
    toString() {
        return `${this.send_date}:${this.author} ${this.short}`
    }
}

class Messenger extends Message {
    constructor(author, send_date, short, messages) {
        super(author, send_date, short, messages);
    }

    show_history() {
        this.messages.forEach(item => {
            console.log(item[0])
        })
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }
    send(author, short) {
        this.author = author;
        this.short = short;
        this.messages.push([`${this.gettime()} ${this.author}: ${this.short}`]);
    }
}
let messenger = new Messenger()
messenger.send('Nurlan', 'HI')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.send('Madvavsav', 'İkinci mesaj')
messenger.gettime()
messenger.show_history()