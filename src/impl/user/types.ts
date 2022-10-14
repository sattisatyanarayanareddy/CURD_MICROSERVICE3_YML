import { DeleteAnswersResponse, GetAnswersResponse, UpdateAnswersResponse, UserApi, CreateAnswersResponse} from "../../../dict/api/user/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'


export class UserApiImpl implements UserApi {
    getAnswers(): Promise<GetAnswersResponse>  {
        return new Promise< GetAnswersResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=< GetAnswersResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetAnswersResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

deleteAnswers(ques_id:number):Promise<DeleteAnswersResponse>{
    return new Promise<DeleteAnswersResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {ques_id:ques_id},
            function(err: any,result: any){
                if(err){
                    const response=<DeleteAnswersResponse>{
                        status:400,
                        body:{message:`someting went wrong`}
                    }
                    resolve(response)
                }
                const response=<DeleteAnswersResponse>{
                    status:201,
                    body:{
                        message:`delete Answer Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }

 updateAnswers(ques_id: number, request: Api.BODYDATA | undefined) : Promise<UpdateAnswersResponse>
 {
    return new Promise<UpdateAnswersResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {ques_id:ques_id},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdateAnswersResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdateAnswersResponse>{
                    status:201,
                    body:{message:`Update User Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }


 createAnswers(request: Api.BODYDATA | undefined): Promise<CreateAnswersResponse>
 {
    return new Promise<UpdateAnswersResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {ques_id:request?.ques_id},
            function(err:any,result:any){
                if(result){
                    const response=<UpdateAnswersResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {ques_id:request?.ques_id,answer:request?.answer},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdateAnswersResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdateAnswersResponse>{
                                status:201,
                                body:{message:`Create Answer Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}
