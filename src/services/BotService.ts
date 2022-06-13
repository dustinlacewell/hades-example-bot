import { Message } from 'discord.js';
import { singleton, DiscordService, EventService } from 'hades';
import { HadesBotService } from 'hades/dist/text-commands';
import { inject } from 'inversify';


@singleton(BotService)
export class BotService extends HadesBotService {

    @inject(DiscordService)
    discord: DiscordService;

    @inject(EventService)
    event: EventService;

    async onReady() {
        const guilds = this.discord.guilds;
        console.log(`Logged in as ${this.client.user.username}.`);
        console.log(`-- in ${guilds.size} guilds`);
        console.log(`-- first guild has ${Array.from(guilds.values())[0].memberCount} members.`)
        this.event.client.on('messageCreate', (message) => {
            console.log(message)
        })
        console.log("Body is ready!")
    }

    async onMessage<T extends Message>(message: T) {
        console.log(message)

        if (!message.channel.isText())
            return

        if (message.content === '!Ping')
            message.channel.send('Pong!')

        await super.onMessage(message);
    }

}
