const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Suwaphat Sriwiset')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Suwaphat Sriwiset',
        age: 19,
        apocalypse: 'If you don*t try, how will you know?',
        detail: 'Studied at Bangkok University. Multimedia and Entertainment Engineering Year2'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: 'Suwaphat Sriwiset',
        age: 19,
        email: 'suwaphat.sriw@bumail.net',
        address: 'pathum thani, Thailand 12120'
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'เพลง',
        project_description: '3 ชั่วโมงเพลงผ่อนคลายที่ดีที่สุดเสียงฝนตกเบา ๆ และดนตรีสลีป',
        project_link: 'https://www.youtube.com/watch?v=ARzWFqSl1to&list=LL&index=40&t=25s'
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: 'pathum thani, Thailand 12120',
        email: 'suwaphat.sriw@bumail.net',
        phone_number: '096-6353157'
    }
    res.send(data)
})

app .listen(3000, () => {
    console.log('Start server at port 3000.')
})