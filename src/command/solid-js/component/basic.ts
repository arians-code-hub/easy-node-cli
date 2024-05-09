import {Command} from "../../../class/Command";

export default class basic extends Command{
    index(args : any): any {
        console.log('index of basic! ',args);
    }
}