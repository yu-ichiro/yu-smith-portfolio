import LightImage from '@/assets/img/light.jpg'
import DarkImage from '@/assets/img/dark.jpg'
import GreenImage from '@/assets/img/green.jpg'
import PortfolioImage from '@/assets/img/noteIMGL0060-min.jpg'
import hitUNetImage from '@/assets/img/hitunet.png'

const Asset = {
    img: {
        lightImage: LightImage,
        darkImage: DarkImage,
        greenImage: GreenImage,
        portfolioImage: PortfolioImage,
        hitUNetImage: hitUNetImage,
    },
};

const globalState = {
    eyeCatchImage: Asset.img.lightImage,
    imageTitleLightColor: true,
    assets: Asset,
    fontAwesomeLibrary: null,
    currentBreakpoint: '',
};

export default globalState;
