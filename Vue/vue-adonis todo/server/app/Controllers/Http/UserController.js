'use strict'

const auth = require("@adonisjs/auth");
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate, rule } = use('Validator')
    // import { validate, rule } from 'indicative/validator'

class UserController {
    async login({ request, auth, response }) {
        const { email, password } = request.all();
        try {
            const token = await auth.attempt(email, password)
                // console.log(token)
            return {
                type: 'success',
                token: token,
                message: 'Successfully logged in'
            }
        } catch (error) {
            return {
                type: 'error',
                message: 'Incorrect email or password. Try again!'
            }
        }
    }

    async register({ request, response }) {
        const { email, password, password_confirmed } = request.all();
        // console.log(email, password, password_confirmed);
        /** Password validation */
        const rules = {
                email: [
                    rule("required"),
                    rule(
                        "regex",
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                ],
                password: [
                    rule("required"),
                    rule("min", 8),
                    rule("max", 20),
                    rule(
                        "regex",
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/
                    ),
                ],
                password_confirmed: 'required|same:password',
            }
            /** customize error message */
        const messages = {
            'password.required': 'Password must be provided',
            'password.regex': 'Password must be alphanumeric',
            'password.min': 'Password must be at least 8 characters',
            'password.max': 'Password must be less than 20 characters',
            'password_confirmed.same': 'Confirm password must be the same',
            'email.required': 'An email address must be provided',
            'email.regex': 'Email address must be valid'
        }
        const validation = await validate(request.all(), rules, messages)
        if (validation.fails()) {
            let errorMessage = validation.messages()
            console.log(errorMessage);

            errorMessage = errorMessage[0].message
            return response.json({
                type: 'invalid',
                message: errorMessage
            })
        } else {
            const user = await User.create({
                email,
                password,
                username: email,
            });
            return this.login(...arguments);
        }
    }
    async sendEmail({ request, session }) {
        const { email } = request.all()
            /** optional validation */
        try {
            // get user
            const existingUser = await User
                .query()
                .where('email', email)
                .select('id', 'email', 'username')
                .first()
            if (existingUser) {
                let token = this.tokenGenerate(existingUser.email)
                const code = Math.floor(100000 + Math.random() * 900000)
                const companyName = "NetCoden Inc."
                const resetLink = "http://localhost:8080/reset-password"
                try {
                    await Mail.send(
                            'emails.passwordreset', { name: existingUser.username, token: token, code: code, companyName: companyName, link: resetLink },
                            message => {
                                message.from('no-reply@fxsmartbull.com')
                                message.to(existingUser.email)
                                message.subject('Password Reset')
                            }
                        )
                        // console.log(code, existingUser.email)
                    session.put('verificationCode', code);
                    session.put('sendMailTo', existingUser.email)
                    console.log(existingUser.email)

                    return {
                        type: 'success',
                        message: 'Password Reset Code Send Successful',
                        sendEmailTo: existingUser.email
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                return {
                    type: 'Failed!',
                    message: 'Email not found. Please register'
                }
            }

        } catch (e) {

        }
    }
    async resetPassword({ session, request }) {
        const { code, password, password_confirmed } = request.all();
        const verifyCode = session.get('verificationCode')
            // console.log(verifyCode)
        if (password != password_confirmed) {
            return {
                type: 'failed',
                message: 'Verification Error'
            }
        }
        if (code == verifyCode) {
            const sendMailTo = session.get('sendMailTo')
                // console.log(sendMailTo)
            const existingUser = await User
                .query()
                .where('email', sendMailTo)
                .first()
            existingUser.password = password
            await existingUser.save()
            return {
                type: 'success',
                message: 'Password Reset Successful'
            }
            // session.clear()

        } else {
            return {
                type: 'failed',
                message: 'verification code is invalid'
            }
        }
    }
    tokenGenerate(str) {
        let currentTime = Date.now()
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
            hash = hash & hash; // Convert to 32bit integer
            hash += currentTime
        }
        let r1 = Math.random().toString(20).substring(2)
        let r2 = Math.random().toString(25).substring(2)
        let r3 = Math.random().toString(30).substring(2)
        let r4 = Math.random().toString(35).substring(2)
        let r5 = Math.random().toString(36).substring(2)
        let token = r1 + hash + r2 + r3 + currentTime + r4 + r5
        return token
    }
}

module.exports = UserController