import {Command} from "../../../class/Command";
import {File} from "../../../lib/File";
export default class basic extends Command{
    index(): any {console.log('index from basic!.');}

    tsx(props : {
        name : string,

        force?: boolean
    }): any {
        const name : string = props.name.split('/').pop() ?? '';

        const data = `import type {Component} from 'solid-js';

export type C${name} = {
    children?: any
};
const ${name}: Component<C${name}> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};

export default ${name};
`;

        File.create({
            path : `${props.name}.tsx`,
            check : props?.force ?? true,
            data
        });
    }
}