import { Command } from "../../class/Command";
export default class read extends Command {
    index(props: {
        src: string;
        key?: string | string[];
    }): any;
}
