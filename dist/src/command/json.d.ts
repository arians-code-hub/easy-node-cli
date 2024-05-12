import { Command } from "../class/Command";
export default class json extends Command {
    index(): any;
    read(props: {
        src: string;
        key?: string | string[];
    }): any;
    copy(props: {
        src: string;
        dst: string;
        key?: string | string[];
    }): void;
    toJs(props: {
        src: string;
        dst: string;
        key?: string | string[];
    }): void;
    toTs(props: {
        src: string;
        dst: string;
        key?: string | string[];
    }): void;
}
