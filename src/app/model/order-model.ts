export class OrderModel {
    id:number=0;
    senderName:string="";
    receiverName:string="";
    receiverAddress:string="";
    senderAddress:string="";
    receiverPincode:number=0;
    receiverMobNum:number=0;

    constructor(id:number,
        senderName:string,
        receiverName:string,
        receiverAddress:string,
        senderAddress:string,
        receiverPincode:number,
        receiverMobNum:number)
    {
        this.id=id;
        this.senderName=senderName;
        this.receiverName=receiverName;
        this.receiverAddress=receiverAddress;
        this.senderAddress=senderAddress;
        this.receiverPincode=receiverPincode;
        this.receiverMobNum=receiverMobNum;
    }
}
