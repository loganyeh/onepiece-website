
export type CardImage = {
    card_set_id: string;
    card_name: string;
    card_image: string;
    life: null | string;
    card_power: string;
    card_color: string;
    card_type: string;
    attribute: string;
    counter_amount: string;
    block_icon?: string;
    card_text: string;
    set_name: string;
}

// type CardApiData = {
//     card_set_id: string;
//     card_image: string;
//     life: null | string;
//     card_power: string;
//     card_color: string;
//     card_type: string;
//     attribute: string;
//     counter_amount: string;
//     block_icon?: string;
//     card_text: string;
// }

export async function fetchCards(){
    const response = await fetch(`https://www.optcgapi.com/api/allSTCards/`);
    const data: CardImage[] = await response.json();
    // console.log(data.slice(0, 10));

    return data;
}

// export type CardSetID = {
//     card_set_id: string;
//     card_name: string;
//     card_image: string;
//     life: null | string;
//     card_power: string;
//     card_color: string;
//     card_type: string;
//     attribute: string;
//     counter_amount: string;
//     block_icon?: string;
//     card_text: string;
// }

export async function fetchCardSetID(){
    // const response = await fetch(`https://www.optcgapi.com/api/sets/card/{card_set_id}/`);
    const response = await fetch(`https://www.optcgapi.com/api/sets/card/OP01-001/`);
    // get the card_set_id from whatever card you want;
    const data: CardImage[] = await response.json();

    console.log(data);

    return data;
}