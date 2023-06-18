/**
 * * ENUMS EM TEMPO DE COMPILAÇÃO
 * 
 *  Mesmo que Enums sejam objetos reais que existem em tempo de execução, a palavra-chave keyof funciona de maneira diferente do que você pode esperar para objetos típicos. Em vez disso, use keyof typeof para obter um Type que representa todas as chaves Enum como strings.
*/

enum LogLevel{
    ERROR, //0
    WARN, //1
    INFO, //2
    DEBUG, //3
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
*/

//Em vez disso, use keyof typeof para obter um Type que representa todas as chaves Enum como strings.
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    //acessando como menbro computado
    const num = LogLevel[key];
    if(num <= LogLevel.WARN) {
        console.log("Log level key is: ", key);
        console.log("Log level value is: ", num);
        console.log("Log level message is: ", message);
    }
}

printImportant("ERROR", "This is a message");