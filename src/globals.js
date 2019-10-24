import LightImage from '@/assets/img/light.jpg'
import DarkImage from '@/assets/img/dark.jpg'
import GreenImage from '@/assets/img/green.jpg'
import PortofolioImage from '@/assets/img/noteIMGL0060.jpg'

const Asset = {
    img: {
        lightImage: LightImage,
        darkImage: DarkImage,
        greenImage: GreenImage,
        portfolioImage: PortofolioImage,
    },
};

const globalState = {
    eyeCatchImage: Asset.img.lightImage,
    assets: Asset,
    fontAwesomeLibrary: null,
    currentBreakpoint: '',
};

export default globalState;
