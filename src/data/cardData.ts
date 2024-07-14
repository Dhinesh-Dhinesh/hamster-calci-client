// PR team

import CEO from "../assets/icons/ceo.png"
import Marketing from "../assets/icons/marketing.png"
import IT_Team from "../assets/icons/it_team.png"
import Support_Team from "../assets/icons/support_team.png"
import HamsterBook from "../assets/icons/hamster_book.png"
import HamsterTube from "../assets/icons/hamster_tube.png"
import X from "../assets/icons/x.png"
import CoinTelegraph from "../assets/icons/cointelegraph.png"
import HamsterGram from "../assets/icons/hamster_gram.png"
import Tiktok from "../assets/icons/tiktok.png"
import Coindesk from "../assets/icons/coindesk.png"
import Influencers from "../assets/icons/influencers.png"
import PartnershipProgram from "../assets/icons/partnership_program.png"
import ProductTeam from "../assets/icons/product_team.png"
import BisDev from "../assets/icons/bisdev_team.png"
import TwoFactor from "../assets/icons/two_factor_authentication.png"
import UX from "../assets/icons/ux_and_ui_team.png"
import SecurityTeam from "../assets/icons/security_team.png"
import QA from "../assets/icons/qa_team.png"
import Antihacking from "../assets/icons/antihacking_shield.png"
import RiskManagement from "../assets/icons/risk_management.png"
import SecurityAudition from "../assets/icons/security_audition.png"
import Anonymous from "../assets/icons/anonymous_transactions_ban.png"
import BlockingAcounts from "../assets/icons/blocking_suspicious_accounts.png"
import Tokenomics from "../assets/icons/tokenomics_expert.png"
import ConsensusExplorerPass from "../assets/icons/consensus_explorer_pass.png"
import VCLabs from "../assets/icons/vc_labs.png"
import ComplianceOfficer from "../assets/icons/compliance_officer.png"
import WelcomeToAmsterdam from "../assets/icons/welcome_to_ams.png"
import DevHubMumbai from "../assets/icons/development_hub_mumbai.png"
import DataCenterTokyo from "../assets/icons/data_center_tokyo.png"
import LeaderBoard from "../assets/icons/leaderboards.png"

// Markets

import Fantokens from "../assets/icons/fan_tokens.png"
import Staking from "../assets/icons/staking.png"
import Btc from "../assets/icons/btc.png"
import Eth from "../assets/icons/eth.png"
import TopTen from "../assets/icons/top_cmc.png"
import GameFi from "../assets/icons/gamifi.png"
import Defi from "../assets/icons/defi.png"
import SocialFi from "../assets/icons/socialfi.png"
import MemeCoin from "../assets/icons/meme.png"
import ShitCoin from "../assets/icons/shit_coin.png"
import TenX from "../assets/icons/tenx.png"
import TwentyX from "../assets/icons/twentyx.png"
import ThirtyX from "../assets/icons/thirtyx.png"
import FiftyX from "../assets/icons/fiftyx.png"
import SeventyX from "../assets/icons/seventyx.png"
import HundredX from "../assets/icons/hundredx.png"
import Derivatives from "../assets/icons/derivatives.png"
import Prediction from "../assets/icons/prediction_market.png"
import WebThree from "../assets/icons/webthree.png"
import DAO from "../assets/icons/dao.png"
import PtwoP from "../assets/icons/p_two_p.png"
import TradingBots from "../assets/icons/trading_bots.png"
import LayerZero from "../assets/icons/layer_zero.png"

// Legal

import KYC from "../assets/icons/kyc.png"
import KYB from "../assets/icons/kyb.png"
import LegalOpinion from "../assets/icons/legal_opinion.png"
import SEC from "../assets/icons/sec.png"
import AntiMoney from "../assets/icons/anti_money.png"
import UAE from "../assets/icons/uae.png"
import Europe from "../assets/icons/europe.png"
import Asia from "../assets/icons/asia.png"
import South from "../assets/icons/south.png"
import Australia from "../assets/icons/australia.png"
import North from "../assets/icons/north.png"
import Nigeria from "../assets/icons/nigeria.png"
import Japan from "../assets/icons/japan.png"
import Ethiopia from "../assets/icons/ethiopia.png"
import India from "../assets/icons/india.png"
import Bangladesh from "../assets/icons/bangladesh.png"
import Indonesia from "../assets/icons/indonesia.png"
import Vietnam from "../assets/icons/vitenam.png"
import Turkey from "../assets/icons/turkey.png"
import Philippines from "../assets/icons/philippines.png"

// Web3

import DEX from "../assets/icons/dex.png"
import Oracle from "../assets/icons/oracle.png"
import Vesting from "../assets/icons/vesting.png"
import LaunchPad from "../assets/icons/launchpad.png"
import NFTMarketplace from "../assets/icons/nft_marketplace.png"

// Specials

import CX from "../assets/icons/cxhub.png"
import HamsterBreaks from "../assets/icons/hamsters_breaks.png"
import XNetwork from "../assets/icons/x_network.png"
import HamsterGreen from "../assets/icons/green_energy.png"
import YoutubeTwentyFive from "../assets/icons/youtube_twenty_five.png"
import TG from "../assets/icons/tg_leaders.png"
import Premarket from "../assets/icons/premarket.png"
import Merch from "../assets/icons/merch.png"
import TONHamsterSuccess from "../assets/icons/ton_hamster_success.png"
import Pirana from "../assets/icons/pirana.png"
import WebThreeAccademy from "../assets/icons/webthree_academy.png"
import GoldButton from "../assets/icons/youtube_gold.png"
import YoutubeChannel from "../assets/icons/youtube_channel.png"
import Pizza from "../assets/icons/pizza.png"
import TopTenGlobal from "../assets/icons/top_ten.png"
import NFT from "../assets/icons/nft.png"
import SpecialHamster from "../assets/icons/special_hamster.png"
import ShortSqueeze from "../assets/icons/short.png"
import ThereAreTwo from "../assets/icons/there_are.png"
import LongSqueeze from "../assets/icons/long.png"
import Villa from "../assets/icons/villa.png"
import AppCenter from "../assets/icons/app_center.png"
import Bogdanoff from "../assets/icons/bogdanoff.png"
import USDT from "../assets/icons/usdt.png"
import BusinessJet from "../assets/icons/business_jet.png"

export type Card = {
    id: number,
    name: string,
    img: string,
    type: "PR&Team" | "Markets" | "Legal" | "Web3" | "Specials",
    initialPph: number,
    initialPrice: number
}

export const PRTeamCards: Card[] =
    [
        {
            id: 1,
            name: "CEO",
            img: CEO,
            type: "PR&Team",
            initialPph: 100,
            initialPrice: 1000
        },
        {
            id: 2,
            name: "Marketing",
            img: Marketing,
            type: "PR&Team",
            initialPph: 70,
            initialPrice: 1000
        },
        {
            id: 3,
            name: "IT Team",
            img: IT_Team,
            type: "PR&Team",
            initialPph: 240,
            initialPrice: 2000
        },
        {
            id: 4,
            name: "Support Team",
            img: Support_Team,
            type: "PR&Team",
            initialPph: 70,
            initialPrice: 750
        },
        {
            id: 5,
            name: "Hamster Book",
            img: HamsterBook,
            type: "PR&Team",
            initialPph: 70,
            initialPrice: 500
        },
        {
            id: 6,
            name: "Hamster Tube",
            img: HamsterTube,
            type: "PR&Team",
            initialPph: 90,
            initialPrice: 600
        },
        {
            id: 7,
            name: "X",
            img: X,
            type: "PR&Team",
            initialPph: 80,
            initialPrice: 550
        },
        {
            id: 8,
            name: "Cointelegraph",
            img: CoinTelegraph,
            type: "PR&Team",
            initialPph: 40,
            initialPrice: 350
        },
        {
            id: 9,
            name: "HamsterGram",
            img: HamsterGram,
            type: "PR&Team",
            initialPph: 50,
            initialPrice: 500
        },
        {
            id: 10,
            name: "TikTok",
            img: Tiktok,
            type: "PR&Team",
            initialPph: 100,
            initialPrice: 750
        },
        {
            id: 11,
            name: "Coindesk",
            img: Coindesk,
            type: "PR&Team",
            initialPph: 80,
            initialPrice: 1000
        },
        {
            id: 12,
            name: "Influencers",
            img: Influencers,
            type: "PR&Team",
            initialPph: 270,
            initialPrice: 2500
        },
        {
            id: 13,
            name: "Partnership Program",
            img: PartnershipProgram,
            type: "PR&Team",
            initialPph: 70,
            initialPrice: 500
        },
        {
            id: 14,
            name: "Product Team",
            img: ProductTeam,
            type: "PR&Team",
            initialPph: 100,
            initialPrice: 1000
        },
        {
            id: 15,
            name: "BisDev Team",
            img: BisDev,
            type: "PR&Team",
            initialPph: 50,
            initialPrice: 500
        },
        {
            id: 16,
            name: "Two factor authentication",
            img: TwoFactor,
            type: "PR&Team",
            initialPph: 125,
            initialPrice: 1000
        },
        {
            id: 17,
            name: "UX and UI team",
            img: UX,
            type: "PR&Team",
            initialPph: 175,
            initialPrice: 760
        },
        {
            id: 18,
            name: "Security Team",
            img: SecurityTeam,
            type: "PR&Team",
            initialPph: 200,
            initialPrice: 1000
        },
        {
            id: 19,
            name: "QA Team",
            img: QA,
            type: "PR&Team",
            initialPph: 130,
            initialPrice: 1275
        },
        {
            id: 20,
            name: "Antihacking shield",
            img: Antihacking,
            type: "PR&Team",
            initialPph: 110,
            initialPrice: 2000
        },
        {
            id: 21,
            name: "Risk management team",
            img: RiskManagement,
            type: "PR&Team",
            initialPph: 265,
            initialPrice: 2000
        },
        {
            id: 22,
            name: "Security Audition",
            img: SecurityAudition,
            type: "PR&Team",
            initialPph: 100,
            initialPrice: 3000
        },
        {
            id: 23,
            name: "Anonymous transaction ban",
            img: Anonymous,
            type: "PR&Team",
            initialPph: 300,
            initialPrice: 900
        },
        {
            id: 24,
            name: "Blocking suspicious accounts",
            img: BlockingAcounts,
            type: "PR&Team",
            initialPph: 160,
            initialPrice: 1250
        },
        {
            id: 25,
            name: "Tokenomics expert",
            img: Tokenomics,
            type: "PR&Team",
            initialPph: 500,
            initialPrice: 5000
        },
        {
            id: 26,
            name: "Consensus Explorer pass",
            img: ConsensusExplorerPass,
            type: "PR&Team",
            initialPph: 1500,
            initialPrice: 25000
        },
        {
            id: 27,
            name: "VC Labs",
            img: VCLabs,
            type: "PR&Team",
            initialPph: 500,
            initialPrice: 15500
        },
        {
            id: 28,
            name: "Compiance officer",
            img: ComplianceOfficer,
            type: "PR&Team",
            initialPph: 120,
            initialPrice: 3500
        },
        {
            id: 29,
            name: "Welcome to Amsterdam",
            img: WelcomeToAmsterdam,
            type: "PR&Team",
            initialPph: 325,
            initialPrice: 3000
        },
        {
            id: 30,
            name: "Development Hub Mumbai",
            img: DevHubMumbai,
            type: "PR&Team",
            initialPph: 4000,
            initialPrice: 90000
        },
        {
            id: 31,
            name: "Data Center Tokyo",
            img: DataCenterTokyo,
            type: "PR&Team",
            initialPph: 6500,
            initialPrice: 200000
        },
        {
            id: 32,
            name: "Leaderboards",
            img: LeaderBoard,
            type: "PR&Team",
            initialPph: 750,
            initialPrice: 20000
        }
    ]

export const MarketsCards: Card[] = [
    {
        id: 1,
        name: "Fan Tokens",
        img: Fantokens,
        type: "Markets",
        initialPph: 950,
        initialPrice: 10000
    },
    {
        id: 2,
        name: "Staking",
        img: Staking,
        type: "Markets",
        initialPph: 600,
        initialPrice: 3500
    },
    {
        id: 3,
        name: "BTC pairs",
        img: Btc,
        type: "Markets",
        initialPph: 40,
        initialPrice: 250
    },
    {
        id: 4,
        name: "ETH pairs",
        img: Eth,
        type: "Markets",
        initialPph: 40,
        initialPrice: 300
    },
    {
        id: 5,
        name: "Top 10 cmc pairs",
        img: TopTen,
        type: "Markets",
        initialPph: 80,
        initialPrice: 1000
    },
    {
        id: 6,
        name: "GameFi tokens",
        img: GameFi,
        type: "Markets",
        initialPph: 70,
        initialPrice: 500
    },
    {
        id: 7,
        name: "Defi2.0 tokens",
        img: Defi,
        type: "Markets",
        initialPph: 40,
        initialPrice: 500
    },
    {
        id: 8,
        name: "SocialFi tokens",
        img: SocialFi,
        type: "Markets",
        initialPph: 50,
        initialPrice: 500
    },
    {
        id: 9,
        name: "Meme Coins",
        img: MemeCoin,
        type: "Markets",
        initialPph: 110,
        initialPrice: 2000
    },
    {
        id: 10,
        name: "Shit coins",
        img: ShitCoin,
        type: "Markets",
        initialPph: 590,
        initialPrice: 5000
    },
    {
        id: 11,
        name: "Margin trading x10",
        img: TenX,
        type: "Markets",
        initialPph: 275,
        initialPrice: 2500
    },
    {
        id: 12,
        name: "Margin trading x20",
        img: TwentyX,
        type: "Markets",
        initialPph: 350,
        initialPrice: 2500
    },
    {
        id: 13,
        name: "Margin trading x30",
        img: ThirtyX,
        type: "Markets",
        initialPph: 500,
        initialPrice: 3500
    },
    {
        id: 14,
        name: "Margin trading x50",
        img: FiftyX,
        type: "Markets",
        initialPph: 1100,
        initialPrice: 10000
    },
    {
        id: 15,
        name: "Margin trading x75",
        img: SeventyX,
        type: "Markets",
        initialPph: 1100,
        initialPrice: 7500
    },
    {
        id: 16,
        name: "Margin trading x100",
        img: HundredX,
        type: "Markets",
        initialPph: 975,
        initialPrice: 5000
    },
    {
        id: 17,
        name: "Derivatives",
        img: Derivatives,
        type: "Markets",
        initialPph: 495,
        initialPrice: 2500
    },
    {
        id: 18,
        name: "Prediction markets",
        img: Prediction,
        type: "Markets",
        initialPph: 345,
        initialPrice: 1750
    },
    {
        id: 19,
        name: "Web3 integration",
        img: WebThree,
        type: "Markets",
        initialPph: 790,
        initialPrice: 6500
    },
    {
        id: 20,
        name: "DAO",
        img: DAO,
        type: "Markets",
        initialPph: 230,
        initialPrice: 1000
    },
    {
        id: 21,
        name: "P2P trading",
        img: PtwoP,
        type: "Markets",
        initialPph: 390,
        initialPrice: 4200
    },
    {
        id: 22,
        name: "Trading bots",
        img: TradingBots,
        type: "Markets",
        initialPph: 195,
        initialPrice: 2100
    },
    {
        id: 23,
        name: "LayerZero Listing",
        img: LayerZero,
        type: "Markets",
        initialPph: 900,
        initialPrice: 10000
    }
]

export const LegalCards: Card[] = [
    {
        id: 1,
        name: "KYC",
        img: KYC,
        type: "Legal",
        initialPph: 10,
        initialPrice: 100
    },
    {
        id: 2,
        name: "KYB",
        img: KYB,
        type: "Legal",
        initialPph: 60,
        initialPrice: 500
    },
    {
        id: 3,
        name: "Legal opinion",
        img: LegalOpinion,
        type: "Legal",
        initialPph: 60,
        initialPrice: 1000
    },
    {
        id: 4,
        name: "SEC transparancy",
        img: SEC,
        type: "Legal",
        initialPph: 60,
        initialPrice: 1200
    },
    {
        id: 5,
        name: "Anti money loundering",
        img: AntiMoney,
        type: "Legal",
        initialPph: 280,
        initialPrice: 3000
    },
    {
        id: 6,
        name: "Licence UAE",
        img: UAE,
        type: "Legal",
        initialPph: 560,
        initialPrice: 5000
    },
    {
        id: 7,
        name: "Licence Europe",
        img: Europe,
        type: "Legal",
        initialPph: 720,
        initialPrice: 5000
    },
    {
        id: 8,
        name: "Licence Asia",
        img: Asia,
        type: "Legal",
        initialPph: 370,
        initialPrice: 5000
    },
    {
        id: 9,
        name: "Licence South America",
        img: South,
        type: "Legal",
        initialPph: 390,
        initialPrice: 5000
    },
    {
        id: 10,
        name: "Licence Australia",
        img: Australia,
        type: "Legal",
        initialPph: 680,
        initialPrice: 5000
    },
    {
        id: 11,
        name: "Licence North America",
        img: North,
        type: "Legal",
        initialPph: 960,
        initialPrice: 10000
    },
    {
        id: 12,
        name: "Licence Nigeria",
        img: Nigeria,
        type: "Legal",
        initialPph: 170,
        initialPrice: 1500
    },
    {
        id: 13,
        name: "Licence Japan",
        img: Japan,
        type: "Legal",
        initialPph: 2600,
        initialPrice: 50000
    },
    {
        id: 14,
        name: "Licence Ethiopia",
        img: Ethiopia,
        type: "Legal",
        initialPph: 1800,
        initialPrice: 35000
    },
    {
        id: 15,
        name: "Licence India",
        img: India,
        type: "Legal",
        initialPph: 2500,
        initialPrice: 45000
    },
    {
        id: 16,
        name: "Licence Bangladesh",
        img: Bangladesh,
        type: "Legal",
        initialPph: 3500,
        initialPrice: 70000
    },
    {
        id: 17,
        name: "Licence Indonesia",
        img: Indonesia,
        type: "Legal",
        initialPph: 5000,
        initialPrice: 100000
    },
    {
        id: 18,
        name: "Licence Vitenam",
        img: Vietnam,
        type: "Legal",
        initialPph: 4000,
        initialPrice: 85000
    },
    {
        id: 19,
        name: "Licence Turkey",
        img: Turkey,
        type: "Legal",
        initialPph: 3000,
        initialPrice: 75000
    },
    {
        id: 20,
        name: "Licence Philippines",
        img: Philippines,
        type: "Legal",
        initialPph: 6500,
        initialPrice: 150000
    }
]

export const Web3: Card[] = [
    {
        id: 1,
        name: "DEX",
        img: DEX,
        type: "Web3",
        initialPph: 3000,
        initialPrice: 75000
    },
    {
        id: 2,
        name: "Oracle",
        img: Oracle,
        type: "Web3",
        initialPph: 800,
        initialPrice: 17500
    },
    {
        id: 3,
        name: "Vesting Smartcontracts",
        img: Vesting,
        type: "Web3",
        initialPph: 1200,
        initialPrice: 41000
    },
    {
        id: 4,
        name: "Launchpad",
        img: LaunchPad,
        type: "Web3",
        initialPph: 3000,
        initialPrice: 95000
    },
    {
        id: 5,
        name: "NFT Marketplace",
        img: NFTMarketplace,
        type: "Web3",
        initialPph: 2000,
        initialPrice: 78000
    }
]

export const SpecialsCards: Card[] = [
    {
        id: 25,
        name: "Business jet",
        img: BusinessJet,
        type: "Specials",
        initialPph: 3000,
        initialPrice: 12000000
    },
    {
        id: 1,
        name: "CX Hub Istanbul",
        img: CX,
        type: "Specials",
        initialPph: 3000,
        initialPrice: 55000
    },
    {
        id: 2,
        name: "Hamster breaks records",
        img: HamsterBreaks,
        type: "Specials",
        initialPph: 2750,
        initialPrice: 500000
    },
    {
        id: 3,
        name: "X Network 10 Million",
        img: XNetwork,
        type: "Specials",
        initialPph: 400,
        initialPrice: 7000
    },
    {
        id: 4,
        name: "Hamster Green Energy",
        img: HamsterGreen,
        type: "Specials",
        initialPph: 2000,
        initialPrice: 17000
    },
    {
        id: 5,
        name: "YouTube 25 Million",
        img: YoutubeTwentyFive,
        type: "Specials",
        initialPph: 2100,
        initialPrice: 18000
    },
    {
        id: 6,
        name: "TG Leaders",
        img: TG,
        type: "Specials",
        initialPph: 2290,
        initialPrice: 22000
    },
    {
        id: 7,
        name: "Premarket Launch",
        img: Premarket,
        type: "Specials",
        initialPph: 7500,
        initialPrice: 1000000
    },
    {
        id: 8,
        name: "Hamster Kombat merch",
        img: Merch,
        type: "Specials",
        initialPph: 100,
        initialPrice: 3000
    },
    {
        id: 9,
        name: "TON + Hamster Kombat = Success",
        img: TONHamsterSuccess,
        type: "Specials",
        initialPph: 5000,
        initialPrice: 1000000
    },
    {
        id: 10,
        name: "Consensus Piranha Pass",
        img: Pirana,
        type: "Specials",
        initialPph: 1900,
        initialPrice: 50000
    },
    {
        id: 11,
        name: "Web3 academy launch",
        img: WebThreeAccademy,
        type: "Specials",
        initialPph: 1500,
        initialPrice: 11000
    },
    {
        id: 12,
        name: "Youtube Gold Button",
        img: GoldButton,
        type: "Specials",
        initialPph: 275,
        initialPrice: 2500
    },
    {
        id: 13,
        name: "Hamster YouTube channel",
        img: YoutubeChannel,
        type: "Specials",
        initialPph: 250,
        initialPrice: 1500
    },
    {
        id: 14,
        name: "Bitcoin Pizza Day",
        img: Pizza,
        type: "Specials",
        initialPph: 100,
        initialPrice: 1000
    },
    {
        id: 15,
        name: "Top 10 Global Ranking",
        img: TopTenGlobal,
        type: "Specials",
        initialPph: 1200,
        initialPrice: 10000
    },
    {
        id: 16,
        name: "NFT Collection Launch",
        img: NFT,
        type: "Specials",
        initialPph: 1200,
        initialPrice: 17000
    },
    {
        id: 17,
        name: "Special Hamster Conference",
        img: SpecialHamster,
        type: "Specials",
        initialPph: 900,
        initialPrice: 5000
    },
    {
        id: 18,
        name: "Short squeeze",
        img: ShortSqueeze,
        type: "Specials",
        initialPph: 1000,
        initialPrice: 35000
    },
    {
        id: 19,
        name: "There are two chairs...",
        img: ThereAreTwo,
        type: "Specials",
        initialPph: 2000,
        initialPrice: 50000
    },
    {
        id: 20,
        name: "Long squeeze",
        img: LongSqueeze,
        type: "Specials",
        initialPph: 2000,
        initialPrice: 30000
    },
    {
        id: 21,
        name: "Villa for the DEV team",
        img: Villa,
        type: "Specials",
        initialPph: 450,
        initialPrice: 2000
    },
    {
        id: 22,
        name: "Apps Center Listing",
        img: AppCenter,
        type: "Specials",
        initialPph: 1000,
        initialPrice: 15000
    },
    {
        id: 23,
        name: "Bogdanoff is calling",
        img: Bogdanoff,
        type: "Specials",
        initialPph: 475,
        initialPrice: 5000
    },
    {
        id: 24,
        name: "USDT on TON",
        img: USDT,
        type: "Specials",
        initialPph: 1350,
        initialPrice: 10000
    }
    // Check card id in top
]