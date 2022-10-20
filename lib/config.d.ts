import convict = require('convict');
export interface Config {
    env: string;
    discordBotToken: string;
    botId: string;
    gfcIntroSurveyLink: string;
    admin1DiscordId: string;
    admin2DiscordId: string;
    generalChatChannelId: string;
    checkinsVoiceChannelId: string;
    notionBacklogDatabaseLink: string;
    virtualOfficeVoiceChannelId: string;
    firstRespondersRoleId: string;
    notionKey: string;
    notionSupportTicketsDatabaseId: string;
    notionSupportTicketsDatabaseStatusId: string;
    notionSupportTicketsDatabaseLink: string;
    githubPersonalAccessToken: string;
    limitMaxConcurrent: string;
    logLevel: string;
    port: string;
    discordServerID: string;
    notionRetroDatabaseId: string;
    sentryDSN: string;
    adminRoleID: string;
    notionBacklogDatabaseId: string;
}
export declare type ConfigurationSchema = {
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
} & convict.SchemaObj<Config>;
export declare function getConfig(): Config;
export declare const config: Config;
//# sourceMappingURL=config.d.ts.map