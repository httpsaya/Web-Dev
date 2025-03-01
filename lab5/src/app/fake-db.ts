import { Profile } from "./profile.interface";

export const PROFILE: Profile[] = [];

for(let i = 1; i <= 100; ++i){
    PROFILE.push({
        id: i,
        image: ``,
        name: ``,
        description: ``,
        rating: i,
        price: ``,
        blabla: ``,
        link: ``,
    });
}