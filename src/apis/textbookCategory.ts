import request from '@/request/index';
import { E_Valid } from '@/types/global';
import { AxiosRequestConfig } from 'axios';

export declare interface I_Category_Select_List {
    categoryId: number
    categoryName: string
} 

export function postTextbookCategorySelectList(config?: AxiosRequestConfig) {
	return request<I_Category_Select_List[]>({
		url: '/textbookCategory/selectList',
		method: 'post',
		...config,
	});
}

export enum E_Textbook_Info_Status {
    未开始,
    正在拍卖,
    已结束,
}

export declare interface I_Textbook_Info {
    auctionEndTime: string
    auctionStartTime: string
    author: string
    categoryId: number
    categoryName: string
    condition: number
    coverImgPath:string
    createdAt: string
    minAddPrice: number
    publicationYear:string 
    publisher: string
    startingPrice: number
    status: E_Textbook_Info_Status
    textbookId: number
    title: string
    updatedAt: string
    userId: number
    valid: E_Valid
}

export function postTextbookInfoRandom(config: AxiosRequestConfig){
    return request({
        url: '/textbookInfo/random',
        method: 'post',
        ...config,
    })
}