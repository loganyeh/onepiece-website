
export type CardImage = {
    card_image: string;
}

// const cardsDataApi: CardImage[] = [
//     data: CardImage[];
// ]

export async function fetchCards(){
    const response = await fetch(`https://www.optcgapi.com/api/allSTCards/`);
    const data = await response.json();
    // console.log(data.slice(0, 10));

    return data;
}