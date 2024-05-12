import { Command } from "../../class/Command";
export default class run extends Command {
    index(props: {
        "!path": string;
        "!build"?: boolean;
        "!command"?: string;
    }): any;
}
