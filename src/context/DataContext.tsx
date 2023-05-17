import { createContext, useEffect, useState } from "react";

interface DataProviderProps {
    contextData: any
    setContextData(item: any): void;
}

export const DataContext = createContext<DataProviderProps>({
    contextData: [],
    setContextData: () => { }
});



export const DataProvider = ({ children }: any) => {

    const [contextData, setContextData] = useState([{"name":"Baku Marriott Hotel Boulevard","categoryId":1,"rate":4.5,"lat":"40.371572","long":"49.837411","imageUrl":"https://s3-alpha-sig.figma.com/img/bbad/41e5/3f3bcb7ef73b1974bf79ae857f0c5050?Expires=1684713600&Signature=Vf6eL1ESFLm~WfCape0AlTVMo6xkFaCXPnePQ7sAajWEANWuzNA8TKSCQ6ppU6HahCBjGTsCHsIoZ0g94KB32lr-89L666ba7KTCYPjESqMqg~2fi9851unr3-2EZyVDgsowUU0VMgEUurNQ7hVlOHN2QYvvI9iXRWke9w1IVk~Ng7E6zZ2SYSF9QnDpMDjQffgEnw7w4A6vgh1G7FM7SfIsvBqVc0wzOsiYVuPCycIPFYXL2v3TfxHVMFIdrpoD5Y1xiwovaEQwiSfZDS7SwdlZL3dI0Wvi7rH7L1lTljch-EwYgxoruFvYp55cjl4bMtN0BTOtHoInNazM8qxGNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994504541212","isSaved":"false","id":"1"},{"name":"Fairmont Baku, Flame Towers","categoryId":"1","rate":"4.7","lat":"40.366316","long":"49.840805","imageUrl":"https://s3-alpha-sig.figma.com/img/96e8/49ce/96d1686bd98e8525e11388ca0107622f?Expires=1684713600&Signature=d86Xi42RXw0tMsdMJsppNpRgLmVe8bu4OaKuNCUIBvUu-5QzFJE4IYlshiXEQ8W93yH2gXtPm4ef-d3nHRusfD5ncrtcU5AB89I6AZM-1jJmb6po3EEY22HyfCQ0GstT-qE0fAUhT00Qos7eCikSiSxLFd~BFHlnl7xxLZbvT2BVJQK1j~EeAEuRBEtIGqAaGVGhLL~DGhHPuHBGvkVspUc03wG6D0KJE2QjEoUYgaD8opxcVfxLXaCzH3xF1ovTV0Oij2EnVkYon09gFe3xzZoaDBKMWCP~avxPEMK5fvJfOGx1M64hiVD6USOJseKXH09ho7JDusIN24ShVmfY6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-00:00","adress":"Farid küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"2"},{"name":"Hilton Baku","categoryId":"2","rate":"4.4","lat":"40.372045","long":"49.837677","imageUrl":"https://s3-alpha-sig.figma.com/img/ade0/822e/346ece8b8054c11db5a997821cf83b9d?Expires=1684713600&Signature=p3n7zefuOVfEKCsvmLzCJrHWHFBvLFUx-dF5Y7-J5VtajSeEYklsSogp7SrIxYU3f4ZoYr~FklAO90VHXw~eYWKOw1IlcK8Id~iv4gHMrpTp~bAR8oE-MLqhfDor2nMwcEPa~EjzdvB1KWRZsfzXI~5P5XDNiAQXAnw-J3CzpuiAb-75Tsqm82qgd~DNTZ1FoeR-mYvOvJpHrEIbaWizemYMjdsXssfTf5bFQoUq6naiupeythaxPJ2DduOB-3RCJ5deVnRP5Vfw3EvRwf2y4sHgLtWyr2logDO4cH9rTj~CuV8~oliyJqDYLMzVY-AslH7~XCze~6DEZgwn6s-fjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Amil küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"3"},{"name":"Four Seasons Hotel Baku","categoryId":"2","rate":"4.6","lat":"40.366759","long":"49.842233","imageUrl":"https://s3-alpha-sig.figma.com/img/3691/d49e/d2e085c2877152070586622b9d587080?Expires=1684713600&Signature=LFDtdt5a2Cc4A6BCc9wPxWr3oI5lCqze9Nq8JzJC9RXb2bZ3LD174jlWGRY4~yODn8cYaWqulv2FtgKEX4eTjBsiAuEEWWDcI1dDKhl84ZOhMEuj87HKsC6qbWzZsrRI0ViXHh3MsnW4v-4NjKc6a~u3EJlaZmz42K~DqH8uSOgTxjbZcsnwMLJV4EGOMGVhxmyDsQCybu~Y4OESuuwAFWA2I5~~Uf0~FeLRZjRdhSl7yJU0naGZHxseCaH-J3keSdCB4H8fEtqR562MPF5m7-9p0QnDZH0RR~xpEnwAXy5siMt8Nom607EhgXdrBxPiKw1N4vhbPCjPc7ligmpDTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Rashad küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"4"},{"name":"JW Marriott Absheron Baku","categoryId":"2","rate":"4.3","lat":"40.370033","long":"49.841015","imageUrl":"https://s3-alpha-sig.figma.com/img/cb5a/0323/b3d066bc8f9f935b4292f295f9cf48b7?Expires=1684713600&Signature=iRcGrwwVm~u~qA-sYVQd16IfUPYIeRgSGQVWN5zZvsrZv1UeAJVOZ1tznkyRJritOU-rO7vYRiEZHpoubqcLIIqJ57aUghgki8jp5CKIB5dady6uy5MMj-VuNEh2xYkKxA-G4h0LsfMl1bm6GwGGwHuqr4W01M30Vj34NaWpMDS4SgkXz2Wa4opibWu7VjzRIYg8aUauwg-sNYl5NFddkQ5Ma7yzO~E64JvziMQCkJTR6UU6UjDqJDJ8DCI~IJ6aZZGt2NiJE9H4PcbYARyf7mVlZvwpydKx9Po5GETOXRtlkefXU~ljBlOpNO~Ho6OO8tN2E7sWe2yjWwOauFWb-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Ali küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"5"},{"name":"Nizami Restaurant","categoryId":"3","rate":"4.2","lat":"40.365262","long":"49.834723","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Küçə küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"6"},{"name":"Firuze Restaurant","categoryId":"3","rate":"4.6","lat":"40.373144","long":"49.837021","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Küçələrə su səpmişəm Küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"7"},{"name":"Mangal Steakhouse","categoryId":"4","rate":"4.5","lat":"40.371518","long":"49.835846","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Küçədidə küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"8"},{"name":"Sumakh Restaurant","categoryId":"4","rate":"4.3","lat":"40.369855","long":"49.842165","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"9"},{"name":"Shirvanshah Museum Restaurant","categoryId":"5","rate":"4.7","lat":"40.364159","long":"49.852235","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"10"},{"name":"National Museum of History of Azerbaijan","categoryId":"5","rate":"4.7","lat":"40.364166","long":"49.851830","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"11"},{"name":"Heydar Aliyev Center","categoryId":"5","rate":"4.6","lat":"40.381277","long":"49.829972","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"12"},{"name":"Carpet Museum","categoryId":"5","rate":"4.4","lat":"40.368775","long":"49.837244","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"13"},{"name":"Museum of Modern Art","categoryId":"6","rate":"4.5","lat":"40.364812","long":"49.833597","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"14"},{"name":"Palace of the Shirvanshahs","categoryId":"6","rate":"4.8","lat":"40.368858","long":"49.846125","imageUrl":"https://s3-alpha-sig.figma.com/img/0669/24a4/afd3cb8a8905ea3901556b36b59eb4f9?Expires=1684713600&Signature=XW7oBqCSIQp7YTf5GX086dF2iIg9PAG24OEQqmlzs4GAfNxW9TncPvXSRWQI~u3xRRZJTtpe4X~gislVG~k9i-7oxYDStnIzj02IaozW8t1ugwtujcK3j9pvL6TsDgI5U8k5Vmsf2YrQAzb8mhhm8NQVPG6e5TzYdxkdwIFzH3z2Af0Xx9OLoVZ05bV7LFlm7vppESXotbq8zWCbckrHITkR9XX2fbELh~PoXSk9FH5tPzF~PDnrNXU~mD9WpdRVi6aMHW4SfSOD2OwZ17WiKu08osbwU~OiS~uTp-MvHmhYhMDBipmRt~FKuNXS6aIhWjgluQpgRr~vc0UUnw0w3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","openCloseTime":"08:00-23:00","adress":"Nizami küçəsi, 203B","phone":"+994501231212","isSaved":"false","id":"15"}]);
    useEffect
    const values: DataProviderProps = {
        contextData, setContextData
    }
    return (
        <DataContext.Provider value={values} >
            {children}
        </DataContext.Provider >
    );
};