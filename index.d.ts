import { Rules } from "async-validator"

declare module 'egg'{
    interface Context{
        validate(rules:string,query:object):any;
        validate(rules:object,query:object,scene:string);
        validate(rules:Rules,query:object,scene:string);
    }
}
