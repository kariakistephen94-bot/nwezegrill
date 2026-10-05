import { Product } from '@/types';
export const imagePath = (name: string) => `/images/nweze-grill-spot/${name}`;
export const formatPrice = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;
export const products: Product[] = [
 {id:'grilled-fish',name:'Grilled Fish',category:'Fish',description:'Seasoned fish, straight from the grill. A little heat. Plenty of flavour.',image:'grilled-fish-and-chips.png',alt:'Whole seasoned grilled fish with chips and red dipping sauce',price:7500,tag:'THE SIGNATURE'},
 {id:'chicken-chips',name:'Chicken, Chips & Dip',category:'Chicken',description:'Grilled chicken meets golden chips. Your lunch plans, sorted.',image:'grilled-chicken-and-chips.jpg',alt:'Grilled chicken portions and golden chips in a takeaway tray',price:4500,tag:'A GOOD CALL'},
 {id:'barbecue-chicken',name:'Barbecue Chicken',category:'Chicken',description:'Richly glazed chicken with that unmistakable barbecue finish.',image:'barbecue-chicken-drumsticks.jpg',alt:'Glazed barbecue chicken drumsticks in a black serving tray',price:4000,tag:'OFF THE GRILL'},
 {id:'fries',name:'French Fries',category:'Sides',description:'A golden side for whatever is coming off the grill.',image:'french-fries-collage.jpg',alt:'Golden seasoned French fries',price:2000,tag:'ON THE SIDE'},
];
export const business = {phone:'0902 875 7941',tel:'+2349028757941',address:'51 Doyin Omololu St, Agboyi Road, Alapere, Lagos 100243, Lagos',directions:'https://www.google.com/maps/search/?api=1&query=51+Doyin+Omololu+St+Alapere+Lagos'};
