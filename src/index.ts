const convict = require('convict');
require('dotenv').config();

interface ConfigSchema {
  validate: ({ allowed }: { allowed: 'strict' | 'warn' | 'none' }) => void;
  getProperties: () => void;
  env: {
    format: string[] | string;
    default: string;
    env: string;
    arg: string;
  };
  discordBotToken: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  botId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  gfcIntroSurveyLink: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  admin1DiscordId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  admin2DiscordId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  generalChatChannelId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  checkinsVoiceChannelId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  virtualOfficeVoiceChannelId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  firstRespondersRoleId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionKey: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionSupportTicketsDatabaseId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionSupportTicketsDatabaseStatusId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionSupportTicketsDatabaseLink: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  githubPersonalAccessToken: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  limitMaxConcurrent: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  logLevel: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  port: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  discordServerID: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionRetroDatabaseId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  sentryDSN: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  adminRoleID: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionBacklogDatabaseId: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
  notionBacklogDatabaseLink: {
    format: string;
    default: string;
    env: string;
    arg: string;
  };
}

const config: ConfigSchema = convict({
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
  sentryDSN: {
    format: String,
    default: 'from default',
    arg: 'sentryDSN',
    env: 'SENTRY_DSN',
  },
  adminRoleID: {
    format: String,
    default: 'from default',
    arg: 'adminRoleID',
    env: 'ADMIN_ROLE_ID',
  },
  notionBacklogDatabaseId: {
    format: String,
    default: 'from default',
    arg: 'notionBacklogDatabaseId',
    env: 'NOTION_BACKLOG_DATABASE_ID',
  },
  notionBacklogDatabaseLink: {
    format: String,
    default: 'from default',
    arg: 'notionBacklogDatabaseLink',
    env: 'NOTION_BACKLOG_DATABASE_LINK',
  },
});

// Lets ensure we are respecting our config schema.
config.validate({
  allowed: 'strict',
});

// Convict object has a lot going on so lets just get a simple js object instead.
module.exports = config.getProperties();
