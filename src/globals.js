import LightImage from '@/assets/img/light.jpg'
import DarkImage from '@/assets/img/dark.jpg'
import GreenImage from '@/assets/img/green.jpg'
import PortfolioImage from '@/assets/img/noteIMGL0060-min.jpg'
import hitUNetImage from '@/assets/img/hitunet.png'
import emPlusImage from '@/assets/img/emplus.jpg'
import iphoneImage from '@/assets/img/iphone.jpg'

const DEBUG = true;
// const DEBUG = false;

export const DebugConsole = DEBUG
    ? console
    : {
        log: () => {},
        warn: () => {},
        error: () => {},
        dir: () => {},
        table: () => {},
    };


const Asset = {
    img: {
        lightImage: LightImage,
        darkImage: DarkImage,
        greenImage: GreenImage,
        portfolioImage: PortfolioImage,
        hitUNetImage: hitUNetImage,
        emPlusImage: emPlusImage,
        iphoneImage: iphoneImage,
    },
};

const globalState = {
    eyeCatchImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQYV2P4DwABAQEAWk1v8QAAAABJRU5ErkJggg==',
    imageTitleLightColor: true,
    assets: Asset,
    fontAwesomeLibrary: null,
    currentBreakpoint: '',
};

globalState.preloadAsset = function(assetSrc, assetClass) {
    const loadedAssets = {};
    return new Promise(((resolve, error) => {
        if (loadedAssets[assetSrc]) resolve();
        const asset = new assetClass();
        asset.onload = () => {
            loadedAssets[assetSrc] = true;
            resolve()
        };
        asset.onerror = error;
        asset.src = assetSrc;
    }));
};

globalState.setEyeCatchImage = function(image) {
    globalState.preloadAsset(image, Image).then(() => {
        globalState.eyeCatchImage = image;
    }).catch(DebugConsole.error);
};

export default globalState;
