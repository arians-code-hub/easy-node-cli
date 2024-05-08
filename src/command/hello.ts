import {Command} from "../class/Command";

export default class hello extends Command{
   index(...args : any): any {
       console.log('index of hello! ',args);
   }
}