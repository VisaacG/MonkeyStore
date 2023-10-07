require('dotenv').config()
const admin = require('firebase-admin')
const{
    applicationDefault
} = require('firebase-admin/app')

const app = admin.initializeApp({
    credential: admin.credential.cert({
        projectId:process.env.FIREBASE_PROJECT_ID,
        clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:process.env.FIREBASE_PRIVATE_KEY.require(/\\n/g, '\n')
    })
})




module.exports = app