const convict = require('convict');
require('dotenv').config();

const config = convict({
  env: {
    format: ['prod', 'dev', 'staging', 'qa', 'local', 'ci'],
    default: 'dev',
    arg: 'nodeEnv',
    env: 'NODE_ENV',
  },
  discordBotToken: {
    format: String,
    default: 'from default',
    arg: 'discordBotToken',
    env: 'DISCORD_BOT_TOKEN',
  },
  botId: {
    format: String,
    default: 'from default',
    arg: 'botId',
    env: 'BOT_ID',
  },
  gfcIntroSurveyLink: {
    format: String,
    default: 'from default',
    arg: 'gfcIntroSurveyLink',
    env: 'GFC_INTRO_SURVEY_LINK',
  },
  admin1DiscordId: {
    format: String,
    default: 'from default',
    arg: 'admin1DiscordId',
    env: 'ADMIN_1_DISCORD_ID',
  },
  admin2DiscordId: {
    format: String,
    default: 'from default',
    arg: 'admin2DiscordId',
    env: 'ADMIN_2_DISCORD_ID',
  },
  generalChatChannelId: {
    format: String,
    default: 'from default',
    arg: 'generalChatChannelId',
    env: 'GENERAL_CHAT_CHANNEL_ID',
  },
  checkinsVoiceChannelId: {
    format: String,
    default: 'from default',
    arg: 'checkinsVoiceChannelId',
    env: 'CHECKINS_VOICE_CHANNEL_ID',
  },
  virtualOfficeVoiceChannelId: {
    format: String,
    default: 'from default',
    arg: 'virtualOfficeVoiceChannelId',
    env: 'VIRTUAL_OFFICE_VOICE_CHANNEL_ID',
  },
  firstRespondersRoleId: {
    format: String,
    default: 'from default',
    arg: 'firstRespondersRoleId',
    env: 'FIRST_RESPONDERS_ROLE_ID',
  },
  notionKey: {
    format: String,
    default: 'from default',
    arg: 'notionKey',
    env: 'NOTION_KEY',
  },
  notionSupportTicketsDatabaseId: {
    format: String,
    default: 'from default',
    arg: 'notionSupportTicketsDatabaseId',
    env: 'NOTION_SUPPORT_TICKETS_DATABASE_ID',
  },
  notionSupportTicketsDatabaseStatusId: {
    format: String,
    default: 'from default',
    arg: 'notionSupportTicketsDatabaseStatusId',
    env: 'NOTION_SUPPORT_TICKETS_DATABASE_STATUS_ID',
  },
  notionSupportTicketsDatabaseLink: {
    format: String,
    default: 'from default',
    arg: 'notionSupportTicketsDatabaseLink',
    env: 'NOTION_SUPPORT_TICKETS_DATABASE_LINK',
  },
  githubPersonalAccessToken: {
    format: String,
    default: 'from default',
    arg: 'githubPersonalAccessToken',
    env: 'GITHUB_PERSON_ACCESS_TOKEN',
  },
  limitMaxConcurrent: {
    format: Number,
    default: 'from default',
    arg: 'limitMaxConcurrent',
    env: 'LIMIT_MAX_CONCURRENT',
  },
  logLevel: {
    format: String,
    default: 'from default',
    arg: 'logLevel',
    env: 'LOG_LEVEL',
  },
  port: {
    format: Number,
    default: 'from default',
    arg: 'port',
    env: 'PORT',
  },
  discordServerID: {
    format: String,
    default: 'from default',
    arg: 'discordServerID',
    env: 'DISCORD_SERVER_ID',
  },
  notionRetroDatabaseId: {
    format: String,
    default: 'from default',
    arg: 'notionRetroDatabaseId',
    env: 'NOTION_RETRO_DATABASE_ID',
  },
});

// Lets ensure we are respecting our config schema.
config.validate({
  allowed: 'strict',
});

// Convict object has a lot going on so lets just get a simple js object instead.
module.exports = config.getProperties();
