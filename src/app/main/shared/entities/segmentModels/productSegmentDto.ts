export class ProductSegmentDto {
    productId?: number | string;
    segmentTypeId?: number;
    priority?: number;
    status?: number;
    productName?: string;
    segmentTypeName?: string;

    mapListToOtherListOFthis?(inputList: any[],productId:number | string) {
        let output:ProductSegmentDto [] = [];
        inputList.forEach(a=>{
            let dto = new ProductSegmentDto();
            dto.productId = productId;
            dto.segmentTypeId = a.segmentTypeId;
            dto.status = 1;
            // dto.priority =
            output.push(dto);
        })
        return output;
    }
}