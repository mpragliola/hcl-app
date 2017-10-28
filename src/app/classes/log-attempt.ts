export class LogAttempt
{

    constructor(
        public min:number,
        public max:number,
        public success:boolean,
        public timestamp:Date
    )
    {}
    
}