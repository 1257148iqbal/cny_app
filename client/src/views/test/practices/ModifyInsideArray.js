import React from 'react';

const ModifyInsideArray = () => {
    const colorSize = {
        fieldId: 570554948434,
        purchaseOrderNo: "45591",
        buyerName: "Richlu",
        styleNo: "F21MW5501",
        cartoonSeriesNo: "F",
        totalPackSize: 100,
        packNo: "Pack-1",
        unitPerPack: 10,
        totalUnit: 1000,
        sizeColorDetails: [
            {
                fieldId: 903735498066,
                colorId: 903735498066,
                colorName: "RED",
                size: [
                    {
                        sizeId: 858670557203,
                        sizeName: "S",
                        inputValue: "1"
                    },
                    {
                        sizeId: 971963936793,
                        sizeName: "L",
                        inputValue: "2"
                    },
                    {
                        sizeId: 1098094854060,
                        sizeName: "XL",
                        inputValue: "3"
                    },
                    {
                        sizeId: 209130044531,
                        sizeName: "M",
                        inputValue: "4"
                    }
                ]
            },
            {
                fieldId: 9037354980666,
                colorId: 9037354988066,
                colorName: "BLUE",
                size: [
                    {
                        sizeId: 858670557203,
                        sizeName: "S",
                        inputValue: "1"
                    },
                    {
                        sizeId: 971963936793,
                        sizeName: "L",
                        inputValue: "6"
                    },
                    {
                        sizeId: 1098094854060,
                        sizeName: "XL",
                        inputValue: "3"
                    },
                    {
                        sizeId: 209130044531,
                        sizeName: "M",
                        inputValue: "4"
                    }
                ]
            }
        ]
    };


    const modified = colorSize.sizeColorDetails.map( i => (
        // orderId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // buyerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // totalPackSize: colorSize.totalPackSize,
        // cartonNoSeries: colorSize.cartoonSeriesNo,
        i.size.map( ii => ( {
            colorId: i.colorId,
            colorName: i.colorName,
            styleId: colorSize.styleNo,
            sizeId: ii.sizeId,
            quantity: Number( ii.inputValue )
        } ) )
        // i.size.map( ii => ( {
        //     colorId: i.colorId,
        //     colorName: i.colorName,
        //     styleId: colorSize.styleNo,
        //     sizeId: ii.sizeId,
        //     quantity: Number( ii.inputValue )

        // } ) )
    ) ).flat();
    const modifieds = colorSize.sizeColorDetails.map( i => ( {
        // orderId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // buyerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        // totalPackSize: colorSize.totalPackSize,
        // cartonNoSeries: colorSize.cartoonSeriesNo,
        packagingDetails: i.size.map( ii => ( {
            colorId: i.colorId,
            colorName: i.colorName,
            styleId: colorSize.styleNo,
            sizeId: ii.sizeId,
            quantity: Number( ii.inputValue )
        } ) )
    } ) );

    console.log( JSON.stringify( modified.flat(), null, 2 ) );
    return (
        <div>
            <pre id="PrevId"></pre>
        </div>
    );
};

export default ModifyInsideArray;
