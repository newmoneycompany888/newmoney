import nodemailer from 'nodemailer'

import type { MailOptions } from 'nodemailer/lib/sendmail-transport'

import { environment } from '@/constants'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: environment.email.authUser,
    pass: environment.email.authPassword,
  },
})

export const sendMail = async (options: MailOptions) => {
  const info = await transporter.sendMail({
    from: options.from,
    to: environment.email.recipients,
    subject: options.subject,
    html: options.html,
    attachments: options.attachments,
  })

  console.log('Message sent: %s', info.messageId)

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  return info
}
