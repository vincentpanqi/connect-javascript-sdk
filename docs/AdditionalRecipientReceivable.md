# SquareConnect.AdditionalRecipientReceivable

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The additional recipient receivable&#39;s unique ID, issued by Square payments servers. | 
**transactionId** | **String** | The ID of the transaction that the additional recipient receivable was applied to. | 
**transactionLocationId** | **String** | The ID of the location that created the receivable. This is the location ID on the associated transaction. | 
**amountMoney** | [**Money**](Money.md) | The amount of the receivable. This will always be non-negative. | 
**createdAt** | **String** | The time when the additional recipient receivable was created, in RFC 3339 format. | [optional] 
**refunds** | [**[AdditionalRecipientReceivableRefund]**](AdditionalRecipientReceivableRefund.md) | Any refunds of the receivable that have been applied. | [optional] 


