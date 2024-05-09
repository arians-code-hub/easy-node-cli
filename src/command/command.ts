import {Command} from "../class/Command";
import {execSync} from "node:child_process";

export default class command extends Command{
   index(props:{
       name : string
   }): any {
        execSync('')
   }
}