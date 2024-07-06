import CEO from "../assets/icons/ceo.png"
import Marketing from "../assets/icons/marketing.png"
import IT_Team from "../assets/icons/it_team.png"
import Support_Team from "../assets/icons/support_team.png"
import HamsterBook from "../assets/icons/hamster_book.png"
import HamsterTube from "../assets/icons/hamster_tube.png"

export type Card = {
    id: number,
    name: string,
    img: string,
    type: "PR&Team" | "Markets" | "Legal" | "Specials"
}

export const PRTeamCards: Card[] =
    [
        {
            id: 1,
            name: "CEO",
            img: CEO,
            type: "PR&Team"
        },
        {
            id: 2,
            name: "Marketing",
            img: Marketing,
            type: "PR&Team"
        },
        {
            id: 3,
            name: "IT Team",
            img: IT_Team,
            type: "PR&Team"
        },
        {
            id: 4,
            name: "Support Team",
            img: Support_Team,
            type: "PR&Team"
        },
        {
            id: 5,
            name: "Hamster Book",
            img: HamsterBook,
            type: "PR&Team"
        },
        {
            id: 5,
            name: "Hamster Tube",
            img: HamsterTube,
            type: "PR&Team"
        }
    ]