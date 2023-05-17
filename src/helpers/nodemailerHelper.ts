import nodemailer from 'nodemailer'
import config from '../config/nodemailer.config';
import { nodemailerMessageOptions } from '../compiler/types';

export default class NodeMail {
    // Singleton
    private static instance: NodeMail;
    
    private constructor() {
    }
    
    public static getInstance(): NodeMail {
        if (!NodeMail.instance) {
            NodeMail.instance = new NodeMail();
        }
        return NodeMail.instance
    }

    private static setMessageOptions(recipient:string, emailSubject:string, html:string) {
        const messageOptions:nodemailerMessageOptions = {
            from: process.env.NODEMAILER_EMAIL as string,
            to: recipient,
            subject: emailSubject,
            html: html
        }

        return messageOptions
    }

    async send(recipient:string, emailSubject:string, html:string) {
        const transporter = nodemailer.createTransport(config)
        const messageOptions:nodemailerMessageOptions = NodeMail.setMessageOptions(recipient, emailSubject, html)

        const info = await transporter.sendMail(messageOptions)

        return info
    }
}