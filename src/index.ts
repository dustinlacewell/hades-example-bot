import 'reflect-metadata';

import { HadesContainer } from 'hades';
import { installTextCommands } from 'hades/dist/text-commands'
import { createConnection } from 'typeorm';

import { BotService } from './services/BotService';

import './text-commands';

((async () => {
    await createConnection({
        type: "sqlite",
        synchronize: true,
        database: `hades.sqlite`,
        entities: [],
    });

    const container = new HadesContainer({
        installers: [installTextCommands],
    });

    container.get(BotService);

})()).catch(e => { console.error(e); process.exit(1) });

