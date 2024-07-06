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
            id: 6,
            name: "Hamster Tube",
            img: HamsterTube,
            type: "PR&Team"
        },
        {
            id: 7,
            name: "X",
            img: X,
            type: "PR&Team"
        },
        {
            id: 8,
            name: "Cointelegraph",
            img: CoinTelegraph,
            type: "PR&Team"
        },
        {
            id: 9,
            name: "HamsterGram",
            img: HamsterGram,
            type: "PR&Team"
        },
        {
            id: 10,
            name: "TikTok",
            img: Tiktok,
            type: "PR&Team"
        },
        {
            id: 11,
            name: "Coindesk",
            img: Coindesk,
            type: "PR&Team"
        },
        {
            id: 12,
            name: "Influencers",
            img: Influencers,
            type: "PR&Team"
        },
        {
            id: 13,
            name: "Partnership Program",
            img: PartnershipProgram,
            type: "PR&Team"
        },
        {
            id: 14,
            name: "Product Team",
            img: ProductTeam,
            type: "PR&Team"
        },
        {
            id: 15,
            name: "BisDev Team",
            img: BisDev,
            type: "PR&Team"
        },
        {
            id: 16,
            name: "Two factor authentication",
            img: TwoFactor,
            type: "PR&Team"
        },
        {
            id: 17,
            name: "UX and UI team",
            img: UX,
            type: "PR&Team"
        },
        {
            id: 18,
            name: "Security Team",
            img: SecurityTeam,
            type: "PR&Team"
        },
        {
            id: 19,
            name: "QA Team",
            img: QA,
            type: "PR&Team"
        },
        {
            id: 20,
            name: "Antihacking shield",
            img: Antihacking,
            type: "PR&Team"
        },
        {
            id: 21,
            name: "Risk management team",
            img: RiskManagement,
            type: "PR&Team"
        },
        {
            id: 22,
            name: "Security Audition",
            img: SecurityAudition,
            type: "PR&Team"
        },
        {
            id: 23,
            name: "Anonymous transaction ban",
            img: Anonymous,
            type: "PR&Team"
        },
        {
            id: 24,
            name: "Blocking suspicious accounts",
            img: BlockingAcounts,
            type: "PR&Team"
        },
        {
            id: 25,
            name: "Tokenomics expert",
            img: Tokenomics,
            type: "PR&Team"
        },
        {
            id: 26,
            name: "Consensus Explorer pass",
            img: ConsensusExplorerPass,
            type: "PR&Team"
        },
        {
            id: 27,
            name: "VC Labs",
            img: VCLabs,
            type: "PR&Team"
        },
        {
            id: 28,
            name: "Compiance officer",
            img: ComplianceOfficer,
            type: "PR&Team"
        },
        {
            id: 29,
            name: "Welcome to Amsterdam",
            img: WelcomeToAmsterdam,
            type: "PR&Team"
        },
        {
            id: 30,
            name: "Development Hub Mumbai",
            img: DevHubMumbai,
            type: "PR&Team"
        },
        {
            id: 31,
            name: "Data Center Tokyo",
            img: DataCenterTokyo,
            type: "PR&Team"
        }
    ]

export const MarketsCards: Card[] = [
    {
        id: 1,
        name: "Fan Tokens",
        img: Fantokens,
        type: "Markets"
    },
    {
        id: 2,
        name: "Staking",
        img: Staking,
        type: "Markets"
    },
    {
        id: 3,
        name: "BTC pairs",
        img: Btc,
        type: "Markets"
    },
    {
        id: 4,
        name: "ETH pairs",
        img: Eth,
        type: "Markets"
    },
    {
        id: 5,
        name: "Top 10 cmc pairs",
        img: TopTen,
        type: "Markets"
    },
    {
        id: 6,
        name: "GameFi tokens",
        img: GameFi,
        type: "Markets"
    },
    {
        id: 7,
        name: "Defi2.0 tokens",
        img: Defi,
        type: "Markets"
    },
    {
        id: 8,
        name: "SocialFi tokens",
        img: SocialFi,
        type: "Markets"
    },
    {
        id: 9,
        name: "Meme Coins",
        img: MemeCoin,
        type: "Markets"
    },
    {
        id: 10,
        name: "Shit coins",
        img: ShitCoin,
        type: "Markets"
    },
    {
        id: 11,
        name: "Margin trading x10",
        img: TenX,
        type: "Markets"
    },
    {
        id: 12,
        name: "Margin trading x20",
        img: TwentyX,
        type: "Markets"
    },
    {
        id: 13,
        name: "Margin trading x30",
        img: ThirtyX,
        type: "Markets"
    },
    {
        id: 14,
        name: "Margin trading x50",
        img: FiftyX,
        type: "Markets"
    },
    {
        id: 15,
        name: "Margin trading x75",
        img: SeventyX,
        type: "Markets"
    },
    {
        id: 16,
        name: "Margin trading x100",
        img: HundredX,
        type: "Markets"
    },
    {
        id: 17,
        name: "Derivatives",
        img: Derivatives,
        type: "Markets"
    },
    {
        id: 18,
        name: "Prediction markets",
        img: Prediction,
        type: "Markets"
    },
    {
        id: 19,
        name: "Web3 integration",
        img: WebThree,
        type: "Markets"
    },
    {
        id: 20,
        name: "DAO",
        img: DAO,
        type: "Markets"
    },
    {
        id: 21,
        name: "P2P trading",
        img: PtwoP,
        type: "Markets"
    },
    {
        id: 22,
        name: "Trading bots",
        img: TradingBots,
        type: "Markets"
    },
    {
        id: 23,
        name: "LayerZero Listing",
        img: LayerZero,
        type: "Markets"
    }
]