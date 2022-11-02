export default function (id:string){
    const configsObject = {
        
        // API CONFIGS
        port: 3105,
        origin: [
            '*'
        ],
        additionalHeaders: [
            'authorization', 
            'language'
        ],

        // DATABASE CONFIGS
        cloud: false,
        cnn: 'mongodb+srv://admin:admin@sisfp.w4kxy5y.mongodb.net/test',
        local: 'mongodb://localhost/sisfp',

        
        // AUTH CONFIGS
        secret: '1op324klasjdsRoi349Cdsghkuo',
        jwtExpiration: '4h',

        // MAIL CONFIS
        mailService: 'gmail',
        mailHost: 'smtp.gmail.com',
        mailSecureConnection: true,
        mailSecure: false,
        mailUser: 'llevelebnur@gmail.com',
        mailPass: 'konphdkeszkuiuqm',

        // CYCLE ENGINE CONFIGS
        enginecycle: 3600000,

    }
    return configsObject[`${id}`];
}