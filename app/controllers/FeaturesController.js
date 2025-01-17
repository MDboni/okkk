import { DecodeToken , EncodeToken  } from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";
import * as path from "node:path";

export const TokenEncode=async (req, res) => {
    let result= EncodeToken("aminboni048@gmail.com",'123')
    res.json({token:result});
 }

 export const TokenDecode=async (req, res) => {
    let result= DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaW5ib25pMDQ4QGdtYWlsLmNvbSIsInVzZXJfaWQiOiIiLCJpYXQiOjE3MzcxMDYwMzcsImV4cCI6MTczOTY5ODAzN30.w5Mpi7AZC8Wrpyp3-pUUAM1YufNNP9kc_kvd-lZMSgk")
    res.json({token:result});
}