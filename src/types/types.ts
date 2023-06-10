

export interface UserLazyMintNftDto {
    id: string;
    creator_id: string;
    cid: string;
    nftName: string;
    created_at: Date;
  }



export interface AccountDto {
    address: string;
    private_key: string;
    user_id: string;
    balance: string;
}