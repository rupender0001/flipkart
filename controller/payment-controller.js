import crypto from 'crypto'
import Payment from '../model/paymentModel.js';


import Razorpay from 'razorpay';

export const addMoney = async (req, res) => {
  try {
    console.log(req.body)
    const user = req.body;
    const newUser = new Payment(user);
    await newUser.save();
    res.status(200).json({ message: user });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const verifyPay=async(req,res)=>{
    try {
        console.log(`>>>>>>>>>>req.body>>>>`,req.body)
        const{razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
        const sign=razorpay_order_id+"|"+razorpay_payment_id;
        const expectedSign=crypto.createHmac("sha26",process.env.KEY_SECRET).update(sign.toString).digest("hex");
        if(razorpay_signature===expectedSign){
            return res.status(200).json({message:"Payment Verify Successfully"})
        }
        else{
            return res.status(200).json({message:"Invalid Signature Sent"})
        }
    } catch (error) {
        
    }
}
