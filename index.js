require('dotenv').config();
import * as convict from 'convict';

const config = convict({
    env: {
        format: ['prod', 'dev', 'staging', 'qa', 'local', 'ci'],
        default: 'dev',
        arg: 'nodeEnv',
        env: 'NODE_ENV'
    },
    discordClientId: {
        format: String,
        default: 'from default',
        arg: 'discordClientId',
        env: 'CLIENT_ID'
    },
    discordGuildtId: {
        format: String,
        default: 'from default',
        arg: 'discordGuildtId',
        env: 'GUILD_ID'
    },
    discordToken: {
        format: String,
        default: 'from default',
        arg: 'discordToken',
        env: 'TOKEN'
    },
    discordBotCmdChannelId: {
        format: String,
        default: 'from default',
        arg: 'discordBotCmdChannelId',
        env: 'BOT_COMMANDS_CHANNEL_ID'
    },
    notionToken: {
        format: String,
        default: 'from default',
        arg: 'notionToken',
        env: 'NOTION_TOKEN'
    },
    gfcRetrosByMonthNotionDbId: {
        format: String,
        default: 'from default',
        arg: 'gfcRetrosByMonthNotionDbId',
        env: 'GFC_RETROS_BY_MONTH_NOTION_DB_ID'
    },
    limitMaxConcurrent: {
        format: Number,
        default: 'from default',
        arg: 'limitMaxConcurrent',
        env: 'LIMIT_MAX_CONCURRENT'
    },
    logLevel: {
        format: String,
        default: 'from default',
        arg: 'logLevel',
        env: 'LOG_LEVEL'
    },
    port: {
        format: Number,
        default: 'from default',
        arg: 'port',
        env: 'PORT'
    }
})
// Lets ensure we are respecting our config schema
config.validate({
    allowed: 'strict'
})
// convict object has a lot going on so lets just get a simple js object instead
module.exports = config.getProperties();
