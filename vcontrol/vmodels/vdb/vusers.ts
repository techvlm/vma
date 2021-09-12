// deno-lint-ignore-file
import { Client} from '../vlinks.ts';
import {vlmdata} from './vdb.ts';


const vlmclients = new Client(vlmdata);

try {
    await vlmclients.connect();
    console.log('vlmclients connected')
    // await vlmclients.queryArray(`DROP TABLE IF EXISTS vmauser;`)
    await vlmclients.queryArray(`CREATE TABLE IF NOT EXISTS vmauser (
        id BIGSERIAL PRIMARY KEY NOT NULL,
        first VARCHAR(200) NOT NULL,
        last VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        vlmhash VARCHAR(500) NOT NULL
        );
    `);
} catch (error) {
    console.log(error);
    await vlmclients.end();
}


const vlmform = async (firstname:string|null,lastname:string|null,email:string|null,phonenumber:string|null,vlmhash:string|null) =>{
    try {
        await vlmclients.connect();
        console.log('open to accept user inputs')
        await vlmclients.queryArray(`INSERT INTO vmauser 
        (
            first
            ,last
            ,email
            ,phone
            ,vlmhash
            ) 
            VALUES
            (
                '${firstname}',
                '${lastname}',
                '${email}',
                '${phonenumber}',
                '${vlmhash}');
                `)
    } catch (error) {
        await vlmclients.end();
        console.log(error)
    }
}

export {vlmform}