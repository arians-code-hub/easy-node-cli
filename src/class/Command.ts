export abstract class Command{
    public abstract index(...args:any ) : any;
}

export function ofStaticClass(cls : any,index?:undefined){
    const obj : any = {};
    for(let pr of Object.getOwnPropertyNames(cls)){
        if(typeof cls[pr] === "function"){
            obj[pr] = cls[pr];
        }
    }
    obj['index'] = index ?? ((...args : any) => console.log(`index from ${cls.constructor.name}`,args));
    return obj;
}