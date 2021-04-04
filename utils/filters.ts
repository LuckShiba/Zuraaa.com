import { Bot } from '~/models/bots/bot'
import { User } from '~/models/users/user'

export function genAvatar (bot: Bot) {
  return `${process.env.apiUrl}/avatars/${bot._id}/${bot.avatar}`
}

export function altName (user: User | Bot) {
  return `${user.username}#${user.discriminator} Image`
}

export function botStatus (bot: Bot) {
  return require(`~/assets/status/${bot.status}.png`)
}